#!/usr/bin/env python3

import boto3
from crhelper import CfnResource
from botocore.exceptions import ClientError

helper = CfnResource()

try:
  pass
except Exception as e:
  helper.init_failure(e)

@helper.create
@helper.update
@helper.delete
def on_event(event, context):
  print(event)
  request_type = event['RequestType']
  azIds = event['ResourceProperties']['azIds']
  prefix = event['ResourceProperties']['prefix']
  if request_type == 'Create':
    return create(azIds, prefix)
  elif request_type == 'Delete':
    delete(azIds, prefix)
    return event['PhysicalResourceId']
  elif request_type == 'Update':
    oldAzIds = event['OldResourceProperties']['azIds']
    oldPrefix = event['OldResourceProperties']['prefix']
    delete(oldAzIds, oldPrefix)
    return create(azIds, prefix)
  else:
    raise Exception("Invalid request type: %s" % request_type)

# Use the ordered parameter list of azIds (zone ids) to create SSM Parameters 
# for the AZ Mapping. Store the resulting zone name mapping along with the zone-id
def create(azIds, prefix):
  ssm = boto3.client('ssm')
   
  azs = getAZs(azIds)
  params = []
  for az in azs:
    azId = az.get('ZoneId')
    azName = az.get('ZoneName')
    # AZ Number should match the ordered zone id parameter
    azNumber = azIds.index(azId) + 1
    ssm.put_parameter(
      Name=prefix + 'az' + str(azNumber), 
      Description=azId,
      Value=azName,
      Type='String',
      Tags=[
        {
          'Key': 'CdkAzMappingParameter',
          'Value': 'True'
        }
      ],
      Tier='Standard'
    )
    params.append({
      prefix + 'az' + str(azNumber): azName
    })

  helper.Data.update({
    'azMapping': params
  })
    
  print(helper.Data)
        
  return None

# Delete the az mapping parameters
def delete(azIds, prefix):
  ssm = boto3.client('ssm')
    
  azNumber=1
  azs = getAZs(azIds)
  for az in azs:
    ssm.delete_parameter(
      Name=prefix + 'az' + str(azNumber)
    )
    azNumber = azNumber + 1

# Get the AZ objects that match the given zone IDs
def getAZs(azIds):
  ec2c = boto3.client('ec2')
  r = ec2c.describe_availability_zones(
    ZoneIds=azIds
  )
  azs = r.get('AvailabilityZones')
  return azs

def handler(event, context):
  print(event)
  helper(event, context)
