# Tags & Attachments

# Overview

To offer a way to store persistent, easily accessible data, the LAMP platform has implemented a feature known as attachments (sometimes also called tags). Using this feature, you can attach data to any element of LAMP for easy retrieval, including:

- Participants
- Studies
- Researchers
- Activities

<hr>

## Functions

There are three main functions used to interact with LAMP attachments, that allow you to list, view, and set attachments. In order, they are:

### LAMP.Type.list_attachments('id')

Given a LAMP id, this function returns an array of strings. Each string corresponds to a tag that has been set on the target. For example:

```
LAMP.Type.list_attachments("ffmz65mn1gtav5fq3bhq")['data']


['graphs.data_quality.activity_counts',
 'graphs.data_quality.passive_features',
 'graphs.data_quality.quality_tags',
 'lamp.attachment_test',
 'lamp.dashboard.credential_roles',
 'lamp.dashboard.researcher_tags',
 'lamp.dashboard.user_type',
 'lamp.test']

```

### LAMP.Type.get_attachment('id','tag_name')

Given a LAMP id and an existing tag, this function returns the currently set value of the tag. It returns a 404 error if the tag is not set. If the same tag has been set multiple times by different agents, (e.g. both a Researcher and a Study), the tag belonging to the highest authority (e.g. Researcher over Study) is returned. For more information on this, see [Authority](#Authority) below.

```
LAMP.Type.get_attachment("ffmz65mn1gtav5fq3bhq",'lamp.test')['data']

'test'
```

### LAMP.Type.set_attachment('parent','target','tag_name','body')

This function is used to set the value of a tag. 'Target' here is the LAMP element the tag will be attached to - while 'parent' is the agent setting the tag (such as a Researcher, Study, or even a Participant). An element can also use the shorthand `'me'` to set a tag on itself - e.g. a Researcher targeting themself. This function can also be used to delete a tag by setting `body` as `None`
```
LAMP.Type.set_attachment("ffmz65mn1gtav5fq3bhq",'U0591253803','lamp.test','This is a test tag')['data']

LAMP.Type.get_attachment('U0591253803','lamp.test')['data']
'This is a test tag'


LAMP.Type.set_attachment("ffmz65mn1gtav5fq3bhq","me",'lamp.test','This is also a test tag')['data']

LAMP.Type.get_attachment("ffmz65mn1gtav5fq3bhq",'lamp.test')['data']
'This is also a test tag'
```
<hr>

## Authority

LAMP does not restrict the setting of a tag even if it has already been set. If the tag was previously set by the same parent, it will be overwritten (or deleted if set to `None`). If the same tag has been set on the same target, but by multiple users, e.g. by both a Researcher and a Study, both will be *present* in the database, but only the one set by the highest authority(see below) user will be returned from `LAMP.Type.get_attachment`.

In descending order, authorities are:

- Admin
- Researcher
- Study
- Participant

If a tag set by a higher authority user is later deleted, however, a tag set by a lower authority user will become available again.

### Case Example 1: Conflicting Tags

In the following code block, both "ffmz65mn1gtav5fq3bhq" (a Researcher), and 'dynp0g0530xkahnzh0xc' (a Study) attempt to set the `lamp.test` tag on the user 'U0591253803'. Both tags are successfully set and no error is thrown. However, since the Researcher has a higher authority than the Study, the tag set by the Researcher is returned (even though the tag set by the Study was set later).
```
LAMP.Type.set_attachment("ffmz65mn1gtav5fq3bhq",'U0591253803','lamp.test','Set by Researcher')['data']
LAMP.Type.set_attachment('dynp0g0530xkahnzh0xc','U0591253803','lamp.test','Set by Study')['data']

LAMP.Type.get_attachment('U0591253803', 'lamp.test')['data']

'Set by Researcher'
```


### Case Example 2: Removing a conflict

In the following code block, both "ffmz65mn1gtav5fq3bhq" (a Researcher), and 'dynp0g0530xkahnzh0xc' (a Study) attempt to set the `lamp.test` tag on the user 'U0591253803'. As before, since the Researcher has a higher authority than the Study, the tag set by the Researcher is returned (even though the tag set by the Study was set later).

However, the Researcher tag is then removed, and the tag set by the Study is now the one returned by the API
```
LAMP.Type.set_attachment("ffmz65mn1gtav5fq3bhq",'U0591253803','lamp.test','Set by Researcher')['data']
LAMP.Type.set_attachment('dynp0g0530xkahnzh0xc','U0591253803','lamp.test','Set by Study')['data']

LAMP.Type.get_attachment('U0591253803', 'lamp.test')['data']
'Set by Researcher'

LAMP.Type.set_attachment("ffmz65mn1gtav5fq3bhq",'U0591253803','lamp.test',None)['data']

LAMP.Type.get_attachment('U0591253803', 'lamp.test')['data']
'Set by Study'
```

