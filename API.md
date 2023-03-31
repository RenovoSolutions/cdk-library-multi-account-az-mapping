# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AzIdToNameMapping <a name="AzIdToNameMapping" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMapping"></a>

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMapping.Initializer"></a>

```typescript
import { AzIdToNameMapping } from '@renovosolutions/cdk-library-multi-account-az-mapping'

new AzIdToNameMapping(scope: Construct, id: string, props: AzIdToNameMappingProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMapping.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMapping.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingProps">AzIdToNameMappingProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMapping.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMapping.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingProps">AzIdToNameMappingProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMapping.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMapping.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMapping.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMapping.isConstruct"></a>

```typescript
import { AzIdToNameMapping } from '@renovosolutions/cdk-library-multi-account-az-mapping'

AzIdToNameMapping.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMapping.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMapping.property.mapping">mapping</a></code> | <code>string</code> | The resulting mapping of AZ IDs to names. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMapping.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `mapping`<sup>Required</sup> <a name="mapping" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMapping.property.mapping"></a>

```typescript
public readonly mapping: string;
```

- *Type:* string

The resulting mapping of AZ IDs to names.

---


### AzIdToNameMappingFunctionCodeCache <a name="AzIdToNameMappingFunctionCodeCache" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache"></a>

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.Initializer"></a>

```typescript
import { AzIdToNameMappingFunctionCodeCache } from '@renovosolutions/cdk-library-multi-account-az-mapping'

new AzIdToNameMappingFunctionCodeCache(scope: Construct, id: string, props: AzIdToNameMappingFunctionCodeCacheProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps">AzIdToNameMappingFunctionCodeCacheProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps">AzIdToNameMappingFunctionCodeCacheProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addEventNotification">addEventNotification</a></code> | Adds a bucket notification event destination. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addObjectCreatedNotification">addObjectCreatedNotification</a></code> | Subscribes a destination to receive notifications when an object is created in the bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addObjectRemovedNotification">addObjectRemovedNotification</a></code> | Subscribes a destination to receive notifications when an object is removed from the bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addToResourcePolicy">addToResourcePolicy</a></code> | Adds a statement to the resource policy for a principal (i.e. account/role/service) to perform actions on this bucket and/or its contents. Use `bucketArn` and `arnForObjects(keys)` to obtain ARNs for this bucket or objects. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.arnForObjects">arnForObjects</a></code> | Returns an ARN that represents all objects within the bucket that match the key pattern specified. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.enableEventBridgeNotification">enableEventBridgeNotification</a></code> | Enables event bridge notification, causing all events below to be sent to EventBridge:. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantDelete">grantDelete</a></code> | Grants s3:DeleteObject* permission to an IAM principal for objects in this bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantPublicAccess">grantPublicAccess</a></code> | Allows unrestricted access to objects from this bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantPut">grantPut</a></code> | Grants s3:PutObject* and s3:Abort* permissions for this bucket to an IAM principal. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantPutAcl">grantPutAcl</a></code> | Grant the given IAM identity permissions to modify the ACLs of objects in the given Bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantRead">grantRead</a></code> | Grant read permissions for this bucket and it's contents to an IAM principal (Role/Group/User). |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantReadWrite">grantReadWrite</a></code> | Grants read/write permissions for this bucket and it's contents to an IAM principal (Role/Group/User). |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantWrite">grantWrite</a></code> | Grant write permissions to this bucket to an IAM principal. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.onCloudTrailEvent">onCloudTrailEvent</a></code> | Define a CloudWatch event that triggers when something happens to this repository. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.onCloudTrailPutObject">onCloudTrailPutObject</a></code> | Defines an AWS CloudWatch event that triggers when an object is uploaded to the specified paths (keys) in this bucket using the PutObject API call. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.onCloudTrailWriteObject">onCloudTrailWriteObject</a></code> | Defines an AWS CloudWatch event that triggers when an object at the specified paths (keys) in this bucket are written to. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.s3UrlForObject">s3UrlForObject</a></code> | The S3 URL of an S3 object. For example:. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.transferAccelerationUrlForObject">transferAccelerationUrlForObject</a></code> | The https Transfer Acceleration URL of an S3 object. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.urlForObject">urlForObject</a></code> | The https URL of an S3 object. Specify `regional: false` at the options for non-regional URLs. For example:. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.virtualHostedUrlForObject">virtualHostedUrlForObject</a></code> | The virtual hosted-style URL of an S3 object. Specify `regional: false` at the options for non-regional URL. For example:. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addCorsRule">addCorsRule</a></code> | Adds a cross-origin access configuration for objects in an Amazon S3 bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addInventory">addInventory</a></code> | Add an inventory configuration. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addLifecycleRule">addLifecycleRule</a></code> | Add a lifecycle rule to the bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addMetric">addMetric</a></code> | Adds a metrics configuration for the CloudWatch request metrics from the bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addAccountAccessPolicy">addAccountAccessPolicy</a></code> | Add access to the specified accounts to get the lambda function code from the bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addOrgOuAccessPolicy">addOrgOuAccessPolicy</a></code> | Add access to the specified organizational units to get the lambda function code from the bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addOrgWideAccessPolicy">addOrgWideAccessPolicy</a></code> | Add access to the whole organization to get the lambda function code from the bucket. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventNotification` <a name="addEventNotification" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addEventNotification"></a>

```typescript
public addEventNotification(event: EventType, dest: IBucketNotificationDestination, filters: NotificationKeyFilter): void
```

Adds a bucket notification event destination.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html)

*Example*

```typescript
   declare const myLambda: lambda.Function;
   const bucket = new s3.Bucket(this, 'MyBucket');
   bucket.addEventNotification(s3.EventType.OBJECT_CREATED, new s3n.LambdaDestination(myLambda), {prefix: 'home/myusername/*'});
```


###### `event`<sup>Required</sup> <a name="event" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addEventNotification.parameter.event"></a>

- *Type:* aws-cdk-lib.aws_s3.EventType

The event to trigger the notification.

---

###### `dest`<sup>Required</sup> <a name="dest" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addEventNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (Lambda, SNS Topic or SQS Queue).

---

###### `filters`<sup>Required</sup> <a name="filters" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addEventNotification.parameter.filters"></a>

- *Type:* aws-cdk-lib.aws_s3.NotificationKeyFilter

S3 object key filter rules to determine which objects trigger this event.

Each filter must include a `prefix` and/or `suffix`
that will be matched against the s3 object key. Refer to the S3 Developer Guide
for details about allowed filter rules.

---

##### `addObjectCreatedNotification` <a name="addObjectCreatedNotification" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addObjectCreatedNotification"></a>

```typescript
public addObjectCreatedNotification(dest: IBucketNotificationDestination, filters: NotificationKeyFilter): void
```

Subscribes a destination to receive notifications when an object is created in the bucket.

This is identical to calling
`onEvent(EventType.OBJECT_CREATED)`.

###### `dest`<sup>Required</sup> <a name="dest" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addObjectCreatedNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (see onEvent).

---

###### `filters`<sup>Required</sup> <a name="filters" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addObjectCreatedNotification.parameter.filters"></a>

- *Type:* aws-cdk-lib.aws_s3.NotificationKeyFilter

Filters (see onEvent).

---

##### `addObjectRemovedNotification` <a name="addObjectRemovedNotification" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addObjectRemovedNotification"></a>

```typescript
public addObjectRemovedNotification(dest: IBucketNotificationDestination, filters: NotificationKeyFilter): void
```

Subscribes a destination to receive notifications when an object is removed from the bucket.

This is identical to calling
`onEvent(EventType.OBJECT_REMOVED)`.

###### `dest`<sup>Required</sup> <a name="dest" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addObjectRemovedNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (see onEvent).

---

###### `filters`<sup>Required</sup> <a name="filters" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addObjectRemovedNotification.parameter.filters"></a>

- *Type:* aws-cdk-lib.aws_s3.NotificationKeyFilter

Filters (see onEvent).

---

##### `addToResourcePolicy` <a name="addToResourcePolicy" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addToResourcePolicy"></a>

```typescript
public addToResourcePolicy(permission: PolicyStatement): AddToResourcePolicyResult
```

Adds a statement to the resource policy for a principal (i.e. account/role/service) to perform actions on this bucket and/or its contents. Use `bucketArn` and `arnForObjects(keys)` to obtain ARNs for this bucket or objects.

Note that the policy statement may or may not be added to the policy.
For example, when an `IBucket` is created from an existing bucket,
it's not possible to tell whether the bucket already has a policy
attached, let alone to re-use that policy to add more statements to it.
So it's safest to do nothing in these cases.

###### `permission`<sup>Required</sup> <a name="permission" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addToResourcePolicy.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

the policy statement to be added to the bucket's policy.

---

##### `arnForObjects` <a name="arnForObjects" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.arnForObjects"></a>

```typescript
public arnForObjects(keyPattern: string): string
```

Returns an ARN that represents all objects within the bucket that match the key pattern specified.

To represent all keys, specify ``"*"``.

If you need to specify a keyPattern with multiple components, concatenate them into a single string, e.g.:

  arnForObjects(`home/${team}/${user}/*`)

###### `keyPattern`<sup>Required</sup> <a name="keyPattern" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.arnForObjects.parameter.keyPattern"></a>

- *Type:* string

---

##### `enableEventBridgeNotification` <a name="enableEventBridgeNotification" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.enableEventBridgeNotification"></a>

```typescript
public enableEventBridgeNotification(): void
```

Enables event bridge notification, causing all events below to be sent to EventBridge:.

Object Deleted (DeleteObject)
- Object Deleted (Lifecycle expiration)
- Object Restore Initiated
- Object Restore Completed
- Object Restore Expired
- Object Storage Class Changed
- Object Access Tier Changed
- Object ACL Updated
- Object Tags Added
- Object Tags Deleted

##### `grantDelete` <a name="grantDelete" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantDelete"></a>

```typescript
public grantDelete(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants s3:DeleteObject* permission to an IAM principal for objects in this bucket.

###### `identity`<sup>Required</sup> <a name="identity" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantDelete.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantDelete.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

---

##### `grantPublicAccess` <a name="grantPublicAccess" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantPublicAccess"></a>

```typescript
public grantPublicAccess(allowedActions: string, keyPrefix?: string): Grant
```

Allows unrestricted access to objects from this bucket.

IMPORTANT: This permission allows anyone to perform actions on S3 objects
in this bucket, which is useful for when you configure your bucket as a
website and want everyone to be able to read objects in the bucket without
needing to authenticate.

Without arguments, this method will grant read ("s3:GetObject") access to
all objects ("*") in the bucket.

The method returns the `iam.Grant` object, which can then be modified
as needed. For example, you can add a condition that will restrict access only
to an IPv4 range like this:

    const grant = bucket.grantPublicAccess();
    grant.resourceStatement!.addCondition(‘IpAddress’, { “aws:SourceIp”: “54.240.143.0/24” });

Note that if this `IBucket` refers to an existing bucket, possibly not
managed by CloudFormation, this method will have no effect, since it's
impossible to modify the policy of an existing bucket.

###### `allowedActions`<sup>Required</sup> <a name="allowedActions" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantPublicAccess.parameter.allowedActions"></a>

- *Type:* string

the set of S3 actions to allow.

Default is "s3:GetObject".

---

###### `keyPrefix`<sup>Optional</sup> <a name="keyPrefix" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantPublicAccess.parameter.keyPrefix"></a>

- *Type:* string

the prefix of S3 object keys (e.g. `home/*`). Default is "*".

---

##### `grantPut` <a name="grantPut" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantPut"></a>

```typescript
public grantPut(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants s3:PutObject* and s3:Abort* permissions for this bucket to an IAM principal.

If encryption is used, permission to use the key to encrypt the contents
of written files will also be granted to the same principal.

###### `identity`<sup>Required</sup> <a name="identity" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantPut.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantPut.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

---

##### `grantPutAcl` <a name="grantPutAcl" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantPutAcl"></a>

```typescript
public grantPutAcl(identity: IGrantable, objectsKeyPattern?: string): Grant
```

Grant the given IAM identity permissions to modify the ACLs of objects in the given Bucket.

If your application has the '@aws-cdk/aws-s3:grantWriteWithoutAcl' feature flag set,
calling `grantWrite` or `grantReadWrite` no longer grants permissions to modify the ACLs of the objects;
in this case, if you need to modify object ACLs, call this method explicitly.

###### `identity`<sup>Required</sup> <a name="identity" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantPutAcl.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantPutAcl.parameter.objectsKeyPattern"></a>

- *Type:* string

---

##### `grantRead` <a name="grantRead" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantRead"></a>

```typescript
public grantRead(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grant read permissions for this bucket and it's contents to an IAM principal (Role/Group/User).

If encryption is used, permission to use the key to decrypt the contents
of the bucket will also be granted to the same principal.

###### `identity`<sup>Required</sup> <a name="identity" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantRead.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantRead.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

---

##### `grantReadWrite` <a name="grantReadWrite" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantReadWrite"></a>

```typescript
public grantReadWrite(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants read/write permissions for this bucket and it's contents to an IAM principal (Role/Group/User).

If an encryption key is used, permission to use the key for
encrypt/decrypt will also be granted.

Before CDK version 1.85.0, this method granted the `s3:PutObject*` permission that included `s3:PutObjectAcl`,
which could be used to grant read/write object access to IAM principals in other accounts.
If you want to get rid of that behavior, update your CDK version to 1.85.0 or later,
and make sure the `@aws-cdk/aws-s3:grantWriteWithoutAcl` feature flag is set to `true`
in the `context` key of your cdk.json file.
If you've already updated, but still need the principal to have permissions to modify the ACLs,
use the `grantPutAcl` method.

###### `identity`<sup>Required</sup> <a name="identity" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantReadWrite.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantReadWrite.parameter.objectsKeyPattern"></a>

- *Type:* any

---

##### `grantWrite` <a name="grantWrite" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantWrite"></a>

```typescript
public grantWrite(identity: IGrantable, objectsKeyPattern?: any, allowedActionPatterns?: string[]): Grant
```

Grant write permissions to this bucket to an IAM principal.

If encryption is used, permission to use the key to encrypt the contents
of written files will also be granted to the same principal.

Before CDK version 1.85.0, this method granted the `s3:PutObject*` permission that included `s3:PutObjectAcl`,
which could be used to grant read/write object access to IAM principals in other accounts.
If you want to get rid of that behavior, update your CDK version to 1.85.0 or later,
and make sure the `@aws-cdk/aws-s3:grantWriteWithoutAcl` feature flag is set to `true`
in the `context` key of your cdk.json file.
If you've already updated, but still need the principal to have permissions to modify the ACLs,
use the `grantPutAcl` method.

###### `identity`<sup>Required</sup> <a name="identity" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantWrite.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantWrite.parameter.objectsKeyPattern"></a>

- *Type:* any

---

###### `allowedActionPatterns`<sup>Optional</sup> <a name="allowedActionPatterns" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.grantWrite.parameter.allowedActionPatterns"></a>

- *Type:* string[]

---

##### `onCloudTrailEvent` <a name="onCloudTrailEvent" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.onCloudTrailEvent"></a>

```typescript
public onCloudTrailEvent(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Define a CloudWatch event that triggers when something happens to this repository.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.onCloudTrailEvent.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.onCloudTrailEvent.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `onCloudTrailPutObject` <a name="onCloudTrailPutObject" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.onCloudTrailPutObject"></a>

```typescript
public onCloudTrailPutObject(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Defines an AWS CloudWatch event that triggers when an object is uploaded to the specified paths (keys) in this bucket using the PutObject API call.

Note that some tools like `aws s3 cp` will automatically use either
PutObject or the multipart upload API depending on the file size,
so using `onCloudTrailWriteObject` may be preferable.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.onCloudTrailPutObject.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.onCloudTrailPutObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `onCloudTrailWriteObject` <a name="onCloudTrailWriteObject" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.onCloudTrailWriteObject"></a>

```typescript
public onCloudTrailWriteObject(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Defines an AWS CloudWatch event that triggers when an object at the specified paths (keys) in this bucket are written to.

This includes
the events PutObject, CopyObject, and CompleteMultipartUpload.

Note that some tools like `aws s3 cp` will automatically use either
PutObject or the multipart upload API depending on the file size,
so using this method may be preferable to `onCloudTrailPutObject`.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.onCloudTrailWriteObject.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.onCloudTrailWriteObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `s3UrlForObject` <a name="s3UrlForObject" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.s3UrlForObject"></a>

```typescript
public s3UrlForObject(key?: string): string
```

The S3 URL of an S3 object. For example:.

`s3://onlybucket`
- `s3://bucket/key`

###### `key`<sup>Optional</sup> <a name="key" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.s3UrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the S3 URL of the
bucket is returned.

---

##### `transferAccelerationUrlForObject` <a name="transferAccelerationUrlForObject" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.transferAccelerationUrlForObject"></a>

```typescript
public transferAccelerationUrlForObject(key?: string, options?: TransferAccelerationUrlOptions): string
```

The https Transfer Acceleration URL of an S3 object.

Specify `dualStack: true` at the options
for dual-stack endpoint (connect to the bucket over IPv6). For example:

- `https://bucket.s3-accelerate.amazonaws.com`
- `https://bucket.s3-accelerate.amazonaws.com/key`

###### `key`<sup>Optional</sup> <a name="key" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.transferAccelerationUrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

###### `options`<sup>Optional</sup> <a name="options" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.transferAccelerationUrlForObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.TransferAccelerationUrlOptions

Options for generating URL.

---

##### `urlForObject` <a name="urlForObject" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.urlForObject"></a>

```typescript
public urlForObject(key?: string): string
```

The https URL of an S3 object. Specify `regional: false` at the options for non-regional URLs. For example:.

`https://s3.us-west-1.amazonaws.com/onlybucket`
- `https://s3.us-west-1.amazonaws.com/bucket/key`
- `https://s3.cn-north-1.amazonaws.com.cn/china-bucket/mykey`

###### `key`<sup>Optional</sup> <a name="key" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.urlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

##### `virtualHostedUrlForObject` <a name="virtualHostedUrlForObject" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.virtualHostedUrlForObject"></a>

```typescript
public virtualHostedUrlForObject(key?: string, options?: VirtualHostedStyleUrlOptions): string
```

The virtual hosted-style URL of an S3 object. Specify `regional: false` at the options for non-regional URL. For example:.

`https://only-bucket.s3.us-west-1.amazonaws.com`
- `https://bucket.s3.us-west-1.amazonaws.com/key`
- `https://bucket.s3.amazonaws.com/key`
- `https://china-bucket.s3.cn-north-1.amazonaws.com.cn/mykey`

###### `key`<sup>Optional</sup> <a name="key" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.virtualHostedUrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

###### `options`<sup>Optional</sup> <a name="options" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.virtualHostedUrlForObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.VirtualHostedStyleUrlOptions

Options for generating URL.

---

##### `addCorsRule` <a name="addCorsRule" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addCorsRule"></a>

```typescript
public addCorsRule(rule: CorsRule): void
```

Adds a cross-origin access configuration for objects in an Amazon S3 bucket.

###### `rule`<sup>Required</sup> <a name="rule" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addCorsRule.parameter.rule"></a>

- *Type:* aws-cdk-lib.aws_s3.CorsRule

The CORS configuration rule to add.

---

##### `addInventory` <a name="addInventory" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addInventory"></a>

```typescript
public addInventory(inventory: Inventory): void
```

Add an inventory configuration.

###### `inventory`<sup>Required</sup> <a name="inventory" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addInventory.parameter.inventory"></a>

- *Type:* aws-cdk-lib.aws_s3.Inventory

configuration to add.

---

##### `addLifecycleRule` <a name="addLifecycleRule" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addLifecycleRule"></a>

```typescript
public addLifecycleRule(rule: LifecycleRule): void
```

Add a lifecycle rule to the bucket.

###### `rule`<sup>Required</sup> <a name="rule" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addLifecycleRule.parameter.rule"></a>

- *Type:* aws-cdk-lib.aws_s3.LifecycleRule

The rule to add.

---

##### `addMetric` <a name="addMetric" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addMetric"></a>

```typescript
public addMetric(metric: BucketMetrics): void
```

Adds a metrics configuration for the CloudWatch request metrics from the bucket.

###### `metric`<sup>Required</sup> <a name="metric" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addMetric.parameter.metric"></a>

- *Type:* aws-cdk-lib.aws_s3.BucketMetrics

The metric configuration to add.

---

##### `addAccountAccessPolicy` <a name="addAccountAccessPolicy" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addAccountAccessPolicy"></a>

```typescript
public addAccountAccessPolicy(principalAccountId: string, principalOrgId?: string): AddToResourcePolicyResult
```

Add access to the specified accounts to get the lambda function code from the bucket.

###### `principalAccountId`<sup>Required</sup> <a name="principalAccountId" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addAccountAccessPolicy.parameter.principalAccountId"></a>

- *Type:* string

The account ID to add access for.

---

###### `principalOrgId`<sup>Optional</sup> <a name="principalOrgId" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addAccountAccessPolicy.parameter.principalOrgId"></a>

- *Type:* string

(Optional) The organization ID to require for the account accessing the bucket.

---

##### `addOrgOuAccessPolicy` <a name="addOrgOuAccessPolicy" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addOrgOuAccessPolicy"></a>

```typescript
public addOrgOuAccessPolicy(principalOrgPaths: string[]): AddToResourcePolicyResult
```

Add access to the specified organizational units to get the lambda function code from the bucket.

###### `principalOrgPaths`<sup>Required</sup> <a name="principalOrgPaths" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addOrgOuAccessPolicy.parameter.principalOrgPaths"></a>

- *Type:* string[]

The organizational unit paths to add access for.

---

##### `addOrgWideAccessPolicy` <a name="addOrgWideAccessPolicy" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addOrgWideAccessPolicy"></a>

```typescript
public addOrgWideAccessPolicy(principalOrgId: string): AddToResourcePolicyResult
```

Add access to the whole organization to get the lambda function code from the bucket.

###### `principalOrgId`<sup>Required</sup> <a name="principalOrgId" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.addOrgWideAccessPolicy.parameter.principalOrgId"></a>

- *Type:* string

The organization ID to require for any accounts accessing the bucket.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.fromBucketArn">fromBucketArn</a></code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.fromBucketAttributes">fromBucketAttributes</a></code> | Creates a Bucket construct that represents an external bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.fromBucketName">fromBucketName</a></code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.fromCfnBucket">fromCfnBucket</a></code> | Create a mutable `IBucket` based on a low-level `CfnBucket`. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.validateBucketName">validateBucketName</a></code> | Thrown an exception if the given bucket name is not valid. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.isConstruct"></a>

```typescript
import { AzIdToNameMappingFunctionCodeCache } from '@renovosolutions/cdk-library-multi-account-az-mapping'

AzIdToNameMappingFunctionCodeCache.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.isOwnedResource"></a>

```typescript
import { AzIdToNameMappingFunctionCodeCache } from '@renovosolutions/cdk-library-multi-account-az-mapping'

AzIdToNameMappingFunctionCodeCache.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.isResource"></a>

```typescript
import { AzIdToNameMappingFunctionCodeCache } from '@renovosolutions/cdk-library-multi-account-az-mapping'

AzIdToNameMappingFunctionCodeCache.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromBucketArn` <a name="fromBucketArn" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.fromBucketArn"></a>

```typescript
import { AzIdToNameMappingFunctionCodeCache } from '@renovosolutions/cdk-library-multi-account-az-mapping'

AzIdToNameMappingFunctionCodeCache.fromBucketArn(scope: Construct, id: string, bucketArn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.fromBucketArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.fromBucketArn.parameter.id"></a>

- *Type:* string

---

###### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.fromBucketArn.parameter.bucketArn"></a>

- *Type:* string

---

##### `fromBucketAttributes` <a name="fromBucketAttributes" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.fromBucketAttributes"></a>

```typescript
import { AzIdToNameMappingFunctionCodeCache } from '@renovosolutions/cdk-library-multi-account-az-mapping'

AzIdToNameMappingFunctionCodeCache.fromBucketAttributes(scope: Construct, id: string, attrs: BucketAttributes)
```

Creates a Bucket construct that represents an external bucket.

###### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.fromBucketAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.fromBucketAttributes.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.fromBucketAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_s3.BucketAttributes

A `BucketAttributes` object.

Can be obtained from a call to
`bucket.export()` or manually created.

---

##### `fromBucketName` <a name="fromBucketName" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.fromBucketName"></a>

```typescript
import { AzIdToNameMappingFunctionCodeCache } from '@renovosolutions/cdk-library-multi-account-az-mapping'

AzIdToNameMappingFunctionCodeCache.fromBucketName(scope: Construct, id: string, bucketName: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.fromBucketName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.fromBucketName.parameter.id"></a>

- *Type:* string

---

###### `bucketName`<sup>Required</sup> <a name="bucketName" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.fromBucketName.parameter.bucketName"></a>

- *Type:* string

---

##### `fromCfnBucket` <a name="fromCfnBucket" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.fromCfnBucket"></a>

```typescript
import { AzIdToNameMappingFunctionCodeCache } from '@renovosolutions/cdk-library-multi-account-az-mapping'

AzIdToNameMappingFunctionCodeCache.fromCfnBucket(cfnBucket: CfnBucket)
```

Create a mutable `IBucket` based on a low-level `CfnBucket`.

###### `cfnBucket`<sup>Required</sup> <a name="cfnBucket" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.fromCfnBucket.parameter.cfnBucket"></a>

- *Type:* aws-cdk-lib.aws_s3.CfnBucket

---

##### `validateBucketName` <a name="validateBucketName" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.validateBucketName"></a>

```typescript
import { AzIdToNameMappingFunctionCodeCache } from '@renovosolutions/cdk-library-multi-account-az-mapping'

AzIdToNameMappingFunctionCodeCache.validateBucketName(physicalName: string)
```

Thrown an exception if the given bucket name is not valid.

###### `physicalName`<sup>Required</sup> <a name="physicalName" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.validateBucketName.parameter.physicalName"></a>

- *Type:* string

name of the bucket.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.bucketArn">bucketArn</a></code> | <code>string</code> | The ARN of the bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.bucketDomainName">bucketDomainName</a></code> | <code>string</code> | The IPv4 DNS name of the specified bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.bucketDualStackDomainName">bucketDualStackDomainName</a></code> | <code>string</code> | The IPv6 DNS name of the specified bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.bucketName">bucketName</a></code> | <code>string</code> | The name of the bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.bucketRegionalDomainName">bucketRegionalDomainName</a></code> | <code>string</code> | The regional domain name of the specified bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.bucketWebsiteDomainName">bucketWebsiteDomainName</a></code> | <code>string</code> | The Domain name of the static website. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.bucketWebsiteUrl">bucketWebsiteUrl</a></code> | <code>string</code> | The URL of the static website. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | Optional KMS encryption key associated with this bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.isWebsite">isWebsite</a></code> | <code>boolean</code> | If this bucket has been configured for static website hosting. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.policy">policy</a></code> | <code>aws-cdk-lib.aws_s3.BucketPolicy</code> | The resource policy associated with this bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.lambdaCode">lambdaCode</a></code> | <code>aws-cdk-lib.aws_lambda.Code</code> | The lambda.Code object that represents the contents of the bucket. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

The ARN of the bucket.

---

##### `bucketDomainName`<sup>Required</sup> <a name="bucketDomainName" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.bucketDomainName"></a>

```typescript
public readonly bucketDomainName: string;
```

- *Type:* string

The IPv4 DNS name of the specified bucket.

---

##### `bucketDualStackDomainName`<sup>Required</sup> <a name="bucketDualStackDomainName" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.bucketDualStackDomainName"></a>

```typescript
public readonly bucketDualStackDomainName: string;
```

- *Type:* string

The IPv6 DNS name of the specified bucket.

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The name of the bucket.

---

##### `bucketRegionalDomainName`<sup>Required</sup> <a name="bucketRegionalDomainName" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.bucketRegionalDomainName"></a>

```typescript
public readonly bucketRegionalDomainName: string;
```

- *Type:* string

The regional domain name of the specified bucket.

---

##### `bucketWebsiteDomainName`<sup>Required</sup> <a name="bucketWebsiteDomainName" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.bucketWebsiteDomainName"></a>

```typescript
public readonly bucketWebsiteDomainName: string;
```

- *Type:* string

The Domain name of the static website.

---

##### `bucketWebsiteUrl`<sup>Required</sup> <a name="bucketWebsiteUrl" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.bucketWebsiteUrl"></a>

```typescript
public readonly bucketWebsiteUrl: string;
```

- *Type:* string

The URL of the static website.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

Optional KMS encryption key associated with this bucket.

---

##### `isWebsite`<sup>Optional</sup> <a name="isWebsite" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.isWebsite"></a>

```typescript
public readonly isWebsite: boolean;
```

- *Type:* boolean

If this bucket has been configured for static website hosting.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.policy"></a>

```typescript
public readonly policy: BucketPolicy;
```

- *Type:* aws-cdk-lib.aws_s3.BucketPolicy

The resource policy associated with this bucket.

If `autoCreatePolicy` is true, a `BucketPolicy` will be created upon the
first call to addToResourcePolicy(s).

---

##### `lambdaCode`<sup>Required</sup> <a name="lambdaCode" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCache.property.lambdaCode"></a>

```typescript
public readonly lambdaCode: Code;
```

- *Type:* aws-cdk-lib.aws_lambda.Code

The lambda.Code object that represents the contents of the bucket.

---


## Structs <a name="Structs" id="Structs"></a>

### AzIdToNameMappingFunctionCodeCacheProps <a name="AzIdToNameMappingFunctionCodeCacheProps" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps"></a>

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.Initializer"></a>

```typescript
import { AzIdToNameMappingFunctionCodeCacheProps } from '@renovosolutions/cdk-library-multi-account-az-mapping'

const azIdToNameMappingFunctionCodeCacheProps: AzIdToNameMappingFunctionCodeCacheProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.accessControl">accessControl</a></code> | <code>aws-cdk-lib.aws_s3.BucketAccessControl</code> | Specifies a canned ACL that grants predefined permissions to the bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.autoDeleteObjects">autoDeleteObjects</a></code> | <code>boolean</code> | Whether all objects should be automatically deleted when the bucket is removed from the stack or when the stack is deleted. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.blockPublicAccess">blockPublicAccess</a></code> | <code>aws-cdk-lib.aws_s3.BlockPublicAccess</code> | The block public access configuration of this bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.bucketKeyEnabled">bucketKeyEnabled</a></code> | <code>boolean</code> | Whether Amazon S3 should use its own intermediary key to generate data keys. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.bucketName">bucketName</a></code> | <code>string</code> | Physical name of this bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.cors">cors</a></code> | <code>aws-cdk-lib.aws_s3.CorsRule[]</code> | The CORS configuration of this bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.encryption">encryption</a></code> | <code>aws-cdk-lib.aws_s3.BucketEncryption</code> | The kind of server-side encryption to apply to this bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | External KMS key to use for bucket encryption. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.enforceSSL">enforceSSL</a></code> | <code>boolean</code> | Enforces SSL for requests. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.eventBridgeEnabled">eventBridgeEnabled</a></code> | <code>boolean</code> | Whether this bucket should send notifications to Amazon EventBridge or not. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.intelligentTieringConfigurations">intelligentTieringConfigurations</a></code> | <code>aws-cdk-lib.aws_s3.IntelligentTieringConfiguration[]</code> | Inteligent Tiering Configurations. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.inventories">inventories</a></code> | <code>aws-cdk-lib.aws_s3.Inventory[]</code> | The inventory configuration of the bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.lifecycleRules">lifecycleRules</a></code> | <code>aws-cdk-lib.aws_s3.LifecycleRule[]</code> | Rules that define how Amazon S3 manages objects during their lifetime. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.metrics">metrics</a></code> | <code>aws-cdk-lib.aws_s3.BucketMetrics[]</code> | The metrics configuration of this bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.notificationsHandlerRole">notificationsHandlerRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role to be used by the notifications handler. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.objectLockDefaultRetention">objectLockDefaultRetention</a></code> | <code>aws-cdk-lib.aws_s3.ObjectLockRetention</code> | The default retention mode and rules for S3 Object Lock. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.objectLockEnabled">objectLockEnabled</a></code> | <code>boolean</code> | Enable object lock on the bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.objectOwnership">objectOwnership</a></code> | <code>aws-cdk-lib.aws_s3.ObjectOwnership</code> | The objectOwnership of the bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.publicReadAccess">publicReadAccess</a></code> | <code>boolean</code> | Grants public read access to all objects in the bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Policy to apply when the bucket is removed from this stack. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.serverAccessLogsBucket">serverAccessLogsBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | Destination bucket for the server access logs. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.serverAccessLogsPrefix">serverAccessLogsPrefix</a></code> | <code>string</code> | Optional log file prefix to use for the bucket's access logs. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.transferAcceleration">transferAcceleration</a></code> | <code>boolean</code> | Whether this bucket should have transfer acceleration turned on or not. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.versioned">versioned</a></code> | <code>boolean</code> | Whether this bucket should have versioning turned on or not. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.websiteErrorDocument">websiteErrorDocument</a></code> | <code>string</code> | The name of the error document (e.g. "404.html") for the website. `websiteIndexDocument` must also be set if this is set. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.websiteIndexDocument">websiteIndexDocument</a></code> | <code>string</code> | The name of the index document (e.g. "index.html") for the website. Enables static website hosting for this bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.websiteRedirect">websiteRedirect</a></code> | <code>aws-cdk-lib.aws_s3.RedirectTarget</code> | Specifies the redirect behavior of all requests to a website endpoint of a bucket. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.websiteRoutingRules">websiteRoutingRules</a></code> | <code>aws-cdk-lib.aws_s3.RoutingRule[]</code> | Rules that define when a redirect is applied and the redirect behavior. |

---

##### `accessControl`<sup>Optional</sup> <a name="accessControl" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.accessControl"></a>

```typescript
public readonly accessControl: BucketAccessControl;
```

- *Type:* aws-cdk-lib.aws_s3.BucketAccessControl
- *Default:* BucketAccessControl.PRIVATE

Specifies a canned ACL that grants predefined permissions to the bucket.

---

##### `autoDeleteObjects`<sup>Optional</sup> <a name="autoDeleteObjects" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.autoDeleteObjects"></a>

```typescript
public readonly autoDeleteObjects: boolean;
```

- *Type:* boolean
- *Default:* false

Whether all objects should be automatically deleted when the bucket is removed from the stack or when the stack is deleted.

Requires the `removalPolicy` to be set to `RemovalPolicy.DESTROY`.

**Warning** if you have deployed a bucket with `autoDeleteObjects: true`,
switching this to `false` in a CDK version *before* `1.126.0` will lead to
all objects in the bucket being deleted. Be sure to update your bucket resources
by deploying with CDK version `1.126.0` or later **before** switching this value to `false`.

---

##### `blockPublicAccess`<sup>Optional</sup> <a name="blockPublicAccess" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.blockPublicAccess"></a>

```typescript
public readonly blockPublicAccess: BlockPublicAccess;
```

- *Type:* aws-cdk-lib.aws_s3.BlockPublicAccess
- *Default:* CloudFormation defaults will apply. New buckets and objects don't allow public access, but users can modify bucket policies or object permissions to allow public access

The block public access configuration of this bucket.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html)

---

##### `bucketKeyEnabled`<sup>Optional</sup> <a name="bucketKeyEnabled" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.bucketKeyEnabled"></a>

```typescript
public readonly bucketKeyEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether Amazon S3 should use its own intermediary key to generate data keys.

Only relevant when using KMS for encryption.

- If not enabled, every object GET and PUT will cause an API call to KMS (with the
  attendant cost implications of that).
- If enabled, S3 will use its own time-limited key instead.

Only relevant, when Encryption is set to `BucketEncryption.KMS` or `BucketEncryption.KMS_MANAGED`.

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string
- *Default:* Assigned by CloudFormation (recommended).

Physical name of this bucket.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.cors"></a>

```typescript
public readonly cors: CorsRule[];
```

- *Type:* aws-cdk-lib.aws_s3.CorsRule[]
- *Default:* No CORS configuration.

The CORS configuration of this bucket.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-cors.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-cors.html)

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.encryption"></a>

```typescript
public readonly encryption: BucketEncryption;
```

- *Type:* aws-cdk-lib.aws_s3.BucketEncryption
- *Default:* `Kms` if `encryptionKey` is specified, or `Unencrypted` otherwise.

The kind of server-side encryption to apply to this bucket.

If you choose KMS, you can specify a KMS key via `encryptionKey`. If
encryption key is not specified, a key will automatically be created.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* If encryption is set to "Kms" and this property is undefined, a new KMS key will be created and associated with this bucket.

External KMS key to use for bucket encryption.

The 'encryption' property must be either not specified or set to "Kms".
An error will be emitted if encryption is set to "Unencrypted" or
"Managed".

---

##### `enforceSSL`<sup>Optional</sup> <a name="enforceSSL" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.enforceSSL"></a>

```typescript
public readonly enforceSSL: boolean;
```

- *Type:* boolean
- *Default:* false

Enforces SSL for requests.

S3.5 of the AWS Foundational Security Best Practices Regarding S3.

> [https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-ssl-requests-only.html](https://docs.aws.amazon.com/config/latest/developerguide/s3-bucket-ssl-requests-only.html)

---

##### `eventBridgeEnabled`<sup>Optional</sup> <a name="eventBridgeEnabled" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.eventBridgeEnabled"></a>

```typescript
public readonly eventBridgeEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether this bucket should send notifications to Amazon EventBridge or not.

---

##### `intelligentTieringConfigurations`<sup>Optional</sup> <a name="intelligentTieringConfigurations" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.intelligentTieringConfigurations"></a>

```typescript
public readonly intelligentTieringConfigurations: IntelligentTieringConfiguration[];
```

- *Type:* aws-cdk-lib.aws_s3.IntelligentTieringConfiguration[]
- *Default:* No Intelligent Tiiering Configurations.

Inteligent Tiering Configurations.

> [https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering.html](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering.html)

---

##### `inventories`<sup>Optional</sup> <a name="inventories" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.inventories"></a>

```typescript
public readonly inventories: Inventory[];
```

- *Type:* aws-cdk-lib.aws_s3.Inventory[]
- *Default:* No inventory configuration

The inventory configuration of the bucket.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-inventory.html)

---

##### `lifecycleRules`<sup>Optional</sup> <a name="lifecycleRules" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.lifecycleRules"></a>

```typescript
public readonly lifecycleRules: LifecycleRule[];
```

- *Type:* aws-cdk-lib.aws_s3.LifecycleRule[]
- *Default:* No lifecycle rules.

Rules that define how Amazon S3 manages objects during their lifetime.

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.metrics"></a>

```typescript
public readonly metrics: BucketMetrics[];
```

- *Type:* aws-cdk-lib.aws_s3.BucketMetrics[]
- *Default:* No metrics configuration.

The metrics configuration of this bucket.

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metricsconfiguration.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-metricsconfiguration.html)

---

##### `notificationsHandlerRole`<sup>Optional</sup> <a name="notificationsHandlerRole" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.notificationsHandlerRole"></a>

```typescript
public readonly notificationsHandlerRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* a new role will be created.

The role to be used by the notifications handler.

---

##### `objectLockDefaultRetention`<sup>Optional</sup> <a name="objectLockDefaultRetention" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.objectLockDefaultRetention"></a>

```typescript
public readonly objectLockDefaultRetention: ObjectLockRetention;
```

- *Type:* aws-cdk-lib.aws_s3.ObjectLockRetention
- *Default:* no default retention period

The default retention mode and rules for S3 Object Lock.

Default retention can be configured after a bucket is created if the bucket already
has object lock enabled. Enabling object lock for existing buckets is not supported.

> [https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-bucket-config-enable](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-bucket-config-enable)

---

##### `objectLockEnabled`<sup>Optional</sup> <a name="objectLockEnabled" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.objectLockEnabled"></a>

```typescript
public readonly objectLockEnabled: boolean;
```

- *Type:* boolean
- *Default:* false, unless objectLockDefaultRetention is set (then, true)

Enable object lock on the bucket.

Enabling object lock for existing buckets is not supported. Object lock must be
enabled when the bucket is created.

> [https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-bucket-config-enable](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html#object-lock-bucket-config-enable)

---

##### `objectOwnership`<sup>Optional</sup> <a name="objectOwnership" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.objectOwnership"></a>

```typescript
public readonly objectOwnership: ObjectOwnership;
```

- *Type:* aws-cdk-lib.aws_s3.ObjectOwnership
- *Default:* No ObjectOwnership configuration, uploading account will own the object.

The objectOwnership of the bucket.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/about-object-ownership.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/about-object-ownership.html)

---

##### `publicReadAccess`<sup>Optional</sup> <a name="publicReadAccess" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.publicReadAccess"></a>

```typescript
public readonly publicReadAccess: boolean;
```

- *Type:* boolean
- *Default:* false

Grants public read access to all objects in the bucket.

Similar to calling `bucket.grantPublicAccess()`

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The bucket will be orphaned.

Policy to apply when the bucket is removed from this stack.

---

##### `serverAccessLogsBucket`<sup>Optional</sup> <a name="serverAccessLogsBucket" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.serverAccessLogsBucket"></a>

```typescript
public readonly serverAccessLogsBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* If "serverAccessLogsPrefix" undefined - access logs disabled, otherwise - log to current bucket.

Destination bucket for the server access logs.

---

##### `serverAccessLogsPrefix`<sup>Optional</sup> <a name="serverAccessLogsPrefix" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.serverAccessLogsPrefix"></a>

```typescript
public readonly serverAccessLogsPrefix: string;
```

- *Type:* string
- *Default:* No log file prefix

Optional log file prefix to use for the bucket's access logs.

If defined without "serverAccessLogsBucket", enables access logs to current bucket with this prefix.

---

##### `transferAcceleration`<sup>Optional</sup> <a name="transferAcceleration" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.transferAcceleration"></a>

```typescript
public readonly transferAcceleration: boolean;
```

- *Type:* boolean
- *Default:* false

Whether this bucket should have transfer acceleration turned on or not.

---

##### `versioned`<sup>Optional</sup> <a name="versioned" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.versioned"></a>

```typescript
public readonly versioned: boolean;
```

- *Type:* boolean
- *Default:* false (unless object lock is enabled, then true)

Whether this bucket should have versioning turned on or not.

---

##### `websiteErrorDocument`<sup>Optional</sup> <a name="websiteErrorDocument" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.websiteErrorDocument"></a>

```typescript
public readonly websiteErrorDocument: string;
```

- *Type:* string
- *Default:* No error document.

The name of the error document (e.g. "404.html") for the website. `websiteIndexDocument` must also be set if this is set.

---

##### `websiteIndexDocument`<sup>Optional</sup> <a name="websiteIndexDocument" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.websiteIndexDocument"></a>

```typescript
public readonly websiteIndexDocument: string;
```

- *Type:* string
- *Default:* No index document.

The name of the index document (e.g. "index.html") for the website. Enables static website hosting for this bucket.

---

##### `websiteRedirect`<sup>Optional</sup> <a name="websiteRedirect" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.websiteRedirect"></a>

```typescript
public readonly websiteRedirect: RedirectTarget;
```

- *Type:* aws-cdk-lib.aws_s3.RedirectTarget
- *Default:* No redirection.

Specifies the redirect behavior of all requests to a website endpoint of a bucket.

If you specify this property, you can't specify "websiteIndexDocument", "websiteErrorDocument" nor , "websiteRoutingRules".

---

##### `websiteRoutingRules`<sup>Optional</sup> <a name="websiteRoutingRules" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingFunctionCodeCacheProps.property.websiteRoutingRules"></a>

```typescript
public readonly websiteRoutingRules: RoutingRule[];
```

- *Type:* aws-cdk-lib.aws_s3.RoutingRule[]
- *Default:* No redirection rules.

Rules that define when a redirect is applied and the redirect behavior.

---

### AzIdToNameMappingProps <a name="AzIdToNameMappingProps" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingProps"></a>

The properties of a new AZ ID to name mapping.

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingProps.Initializer"></a>

```typescript
import { AzIdToNameMappingProps } from '@renovosolutions/cdk-library-multi-account-az-mapping'

const azIdToNameMappingProps: AzIdToNameMappingProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingProps.property.azIds">azIds</a></code> | <code>string[]</code> | The target AZ IDs for mapping. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The number of days to retain log events in CloudWatch logs. |
| <code><a href="#@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingProps.property.ssmParameterPrefix">ssmParameterPrefix</a></code> | <code>string</code> | The prefix to use for the SSM parameter names. |

---

##### `azIds`<sup>Optional</sup> <a name="azIds" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingProps.property.azIds"></a>

```typescript
public readonly azIds: string[];
```

- *Type:* string[]
- *Default:* ['use1-az2', 'use1-az4', 'use1-az6']

The target AZ IDs for mapping.

Defaults to values for 3 zones in us-east-1.

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* logs.RetentionDays.ONE_MONTH

The number of days to retain log events in CloudWatch logs.

Defaults to 30 days.

---

##### `ssmParameterPrefix`<sup>Optional</sup> <a name="ssmParameterPrefix" id="@renovosolutions/cdk-library-multi-account-az-mapping.AzIdToNameMappingProps.property.ssmParameterPrefix"></a>

```typescript
public readonly ssmParameterPrefix: string;
```

- *Type:* string
- *Default:* '/az-mapping/'

The prefix to use for the SSM parameter names.

Defaults to `/az-mapping/`.

---



