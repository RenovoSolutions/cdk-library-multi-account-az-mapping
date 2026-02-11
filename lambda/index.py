#!/usr/bin/env python3
"""CloudFormation custom resource for managing AZ mappings.

Creates SSM parameters that map ordered AZ IDs to their
availability zone names, enabling consistent multi-account
AZ mapping across AWS accounts.
"""

from typing import TYPE_CHECKING

import boto3
from crhelper import CfnResource

if TYPE_CHECKING:
    from mypy_boto3_ssm.client import SSMClient
    from mypy_boto3_ec2.client import EC2Client

helper = CfnResource()

try:
    pass
except Exception as e:
    helper.init_failure(e)


@helper.create
@helper.update
@helper.delete
def on_event(event, _) -> None | str:
    """Handle CloudFormation custom resource events.

    Args:
        event: CloudFormation custom resource event containing
          request type and properties
        _: Lambda context (unused)

    Returns:
        Physical resource ID for the custom resource, or None
    """
    print(event)
    request_type = event["RequestType"]
    azIds = event["ResourceProperties"]["azIds"]
    prefix = event["ResourceProperties"]["prefix"]
    if request_type == "Create":
        return create(azIds, prefix)
    elif request_type == "Delete":
        delete(prefix)
        return event["PhysicalResourceId"]
    elif request_type == "Update":
        oldPrefix = event["OldResourceProperties"]["prefix"]
        delete(oldPrefix)
        return create(azIds, prefix)
    else:
        raise Exception("Invalid request type: %s" % request_type)


def create(azIds, prefix) -> None:
    """Create SSM parameters mapping AZ numbers to
      availability zone names.

    Args:
        azIds: Ordered list of availability zone IDs
          (e.g., ['use1-az1', 'use1-az2'])
        prefix: SSM parameter name prefix (e.g., '/az-mapping/')

    Creates SSM parameters at {prefix}az1, {prefix}az2, etc.,
    where the number corresponds to the position in the azIds
    list and the value is the AZ name.
    """
    ssm: SSMClient = boto3.client("ssm")

    azs = getAZs(azIds)
    params = []
    for az in azs:
        azId = az.get("ZoneId")
        azName = az.get("ZoneName")
        # AZ Number should match the ordered zone id parameter
        azNumber = azIds.index(azId) + 1
        ssm.put_parameter(
            Name=prefix + "az" + str(azNumber),
            Description=azId,
            Value=azName,
            Type="String",
            Tags=[{"Key": "CdkAzMappingParameter", "Value": "True"}],
            Tier="Standard",
        )
        params.append({prefix + "az" + str(azNumber): azName})

    helper.Data.update({"azMapping": params})

    print(helper.Data)

    return None


def delete(prefix) -> None:
    """Delete SSM parameters created by the AZ mapping.

    Args:
        prefix: SSM parameter name prefix used during creation
    """
    ssm: SSMClient = boto3.client("ssm")

    azNumber = 1
    while True:
        try:
            ssm.delete_parameter(Name=prefix + "az" + str(azNumber))
            azNumber += 1
        except ssm.exceptions.ParameterNotFound:
            break
        except Exception as e:
            print(f"Error deleting {prefix}az{azNumber}: {e}")
            azNumber += 1


def getAZs(azIds) -> list:
    """Retrieve availability zone details from EC2.

    Args:
        azIds: List of availability zone IDs to query

    Returns:
        List of availability zone objects containing ZoneId and ZoneName
    """
    ec2c: EC2Client = boto3.client("ec2")
    r = ec2c.describe_availability_zones(ZoneIds=azIds)
    azs = r.get("AvailabilityZones")
    return azs


def handler(event, _) -> None:
    """Lambda entry point for CloudFormation custom resource.

    Args:
        event: Lambda event from CloudFormation
        _: Lambda context (unused)
    """
    print(event)
    helper(event, _)
