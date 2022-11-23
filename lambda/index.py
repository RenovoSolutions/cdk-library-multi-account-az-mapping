import boto3
def handler(event, context):
    azIds = event['ResourceProperties']['azIds']
    prefix = event['ResourceProperties']['prefix']
    if event['RequestType'] == 'Create':
        create(azIds, prefix)
    elif event['RequestType'] == 'Delete':
        delete(azIds, prefix)
    elif event['RequestType'] == 'Update':
        oldAzIds = event['OldResourceProperties']['azIds']
        oldPrefix = event['OldResourceProperties']['prefix']
        delete(oldAzIds, oldPrefix)
        create(azIds, prefix)
    else:
        print('no changes')
    response_data = {}
    return response_data
# Use the ordered parameter list of azIds (zone ids) to create SSM Parameters 
# for the AZ Mapping. Store the resulting zone name mapping along with the zone-id
def create(azIds, prefix):
    ssm = boto3.client('ssm')
    
    azs = getAZs(azIds)
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
            Tier='Standard')
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