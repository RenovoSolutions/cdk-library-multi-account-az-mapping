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


## Structs <a name="Structs" id="Structs"></a>

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



