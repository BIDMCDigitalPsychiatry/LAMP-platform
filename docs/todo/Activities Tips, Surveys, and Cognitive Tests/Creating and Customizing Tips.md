---
title: Creating and Customizing Tips
slug: create_tips
---
# Creating and Customizing a Tip for Learn

Navigate to the activities page click the “+ Add” button, and then scroll to the bottom and click “tips”.

1. Log in to the dashboard and navigate to the Activities tab.
2. Click the `[+ Add]` button at the top right of the list to begin.
3. Select the study you wish to add the tip to.
4. Title your tip.
5. Copy and paste the link to the tip you want to add. If there is no link this will be left blank.
6. Add the tip author. If there is no author, this will be left blank.
7. Press the `(+)` icon to add an image.

![](../../assets/activity_menu.jpg)

![](../../assets/new_tip.jpg)

# Customizing the Content of Your Tip

Tips support [Markdown-formatted text](https://www.markdownguide.org/getting-started/), including basic HTML and embedded content such as YouTube videos or PDF documents. Markdown formatting is different than typical Word processing or other text editors, and uses special syntax to change how certain text is displayed. Examples of what you can do are provided below, but if you need more help, please see the Markdown Guide linked above.

### Basic Formatting

![](../../assets/Screen_Shot_2020-12-01_at_2.00.39_PM.png)

```markdown
# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

---

## Text

**This is bold text**

*This is italic text*

Emojis in this text will be replaced like in Slack or GitHub: :dog: :+1:
```

![](../../assets/Screen_Shot_2020-12-01_at_2.00.54_PM.png)

```markdown
## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar
```

![](../../assets/Screen_Shot_2020-12-01_at_2.01.29_PM.png)

![](../../assets/Screen_Shot_2020-12-01_at_2.01.12_PM.png)

```markdown
## Blocks

Inline `block`

Paragraph blocks

```
Sample text here...
```

---

## Quotes

> Quotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

```

![](../../assets/Screen_Shot_2020-12-01_at_2.01.59_PM.png)

```markdown
## Links & Media

[link text](https://docs.lamp.digital)

[link with title](https://docs.lamp.digital "Hello LAMP!")

![flaticon](https://www.flaticon.com/svg/static/icons/svg/3823/3823851.svg)
```

### Advanced Formatting

![](../../assets/Screen_Shot_2020-12-01_at_2.01.46_PM.png)

```markdown
## Tables

| hello | world | this | is | a |
|:-:|-|-|-|-|
| table | 1 | 2 | 3 | 4 |
| abc | 123 | | | |
| ![embedded image](https://www.flaticon.com/svg/static/icons/svg/3823/3823851.svg) | | 1. hi<br />2. hello | | **test** |
```

![](../../assets/Screen_Shot_2020-12-01_at_2.02.22_PM.png)

```markdown
<details>
<summary>Ready to watch a video?</summary>
<iframe width="400" height="300" src="https://www.youtube.com/embed/NkCPCFGxxr8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</details>

<details>
<summary>Ready to read a book?</summary>
<embed src="http://www.africau.edu/images/default/sample.pdf" width="400" height="520" type="application/pdf">
</details>
```

### Embedding Media

In some cases, if you're embedding media such as images or small PDF files, it's important to encode that data into the Markdown text itself, instead of using URLs. → [You may need to use an online base64 converter tool, like this one.](https://dopiaza.org/tools/datauri/index.php) Upload the file, copy the text that appears and paste that as the “src=…” item.

Before (URL):

```
http://www.africau.edu/images/default/sample.pdf
```

After (Embedded Data):

```
data:image/png;base64,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
```

- Full Markdown Sample

    ```markdown
    # h1 Heading
    ## h2 Heading
    ### h3 Heading
    #### h4 Heading
    ##### h5 Heading
    ###### h6 Heading

    ---

    ## Text

    **This is bold text**

    *This is italic text*

    Emojis in this text will be replaced like in Slack or GitHub: :dog: :+1:

    ---

    ## Quotes

    > Quotes can also be nested...
    >> ...by using additional greater-than signs right next to each other...
    > > > ...or with spaces between arrows.

    ---

    ## Lists

    Unordered

    + Create a list by starting a line with `+`, `-`, or `*`
    + Sub-lists are made by indenting 2 spaces:
      - Marker character change forces new list start:
        * Ac tristique libero volutpat at
        + Facilisis in pretium nisl aliquet
        - Nulla volutpat aliquam velit
    + Very easy!

    Ordered

    1. Lorem ipsum dolor sit amet
    2. Consectetur adipiscing elit
    3. Integer molestie lorem at massa

    1. You can use sequential numbers...
    1. ...or keep all the numbers as `1.`

    Start numbering with offset:

    57. foo
    1. bar

    ---

    ## Blocks

    Inline `block`

    Paragraph blocks

    ```
    Sample text here...
    ```

    ---

    ## Links & Media

    [link text](http://dev.nodeca.com)

    [link with title](http://nodeca.github.io/pica/demo/ "title text!")

    ![image](https://www.flaticon.com/svg/static/icons/svg/3823/3823851.svg)

    <details>
    <summary>Ready to watch a video?</summary>
    <iframe width="400" height="300" src="https://www.youtube.com/embed/NkCPCFGxxr8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </details>

    <details>
    <summary>Ready to read a book?</summary>
    <embed src="data:application/pdf;base64,JVBERi0xLjMNCiXi48/TDQoNCjEgMCBvYmoNCjw8DQovVHlwZSAvQ2F0YWxvZw0KL091dGxpbmVzIDIgMCBSDQovUGFnZXMgMyAwIFINCj4+DQplbmRvYmoNCg0KMiAwIG9iag0KPDwNCi9UeXBlIC9PdXRsaW5lcw0KL0NvdW50IDANCj4+DQplbmRvYmoNCg0KMyAwIG9iag0KPDwNCi9UeXBlIC9QYWdlcw0KL0NvdW50IDINCi9LaWRzIFsgNCAwIFIgNiAwIFIgXSANCj4+DQplbmRvYmoNCg0KNCAwIG9iag0KPDwNCi9UeXBlIC9QYWdlDQovUGFyZW50IDMgMCBSDQovUmVzb3VyY2VzIDw8DQovRm9udCA8PA0KL0YxIDkgMCBSIA0KPj4NCi9Qcm9jU2V0IDggMCBSDQo+Pg0KL01lZGlhQm94IFswIDAgNjEyLjAwMDAgNzkyLjAwMDBdDQovQ29udGVudHMgNSAwIFINCj4+DQplbmRvYmoNCg0KNSAwIG9iag0KPDwgL0xlbmd0aCAxMDc0ID4+DQpzdHJlYW0NCjIgSg0KQlQNCjAgMCAwIHJnDQovRjEgMDAyNyBUZg0KNTcuMzc1MCA3MjIuMjgwMCBUZA0KKCBBIFNpbXBsZSBQREYgRmlsZSApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY4OC42MDgwIFRkDQooIFRoaXMgaXMgYSBzbWFsbCBkZW1vbnN0cmF0aW9uIC5wZGYgZmlsZSAtICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjY0LjcwNDAgVGQNCigganVzdCBmb3IgdXNlIGluIHRoZSBWaXJ0dWFsIE1lY2hhbmljcyB0dXRvcmlhbHMuIE1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NTIuNzUyMCBUZA0KKCB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDYyOC44NDgwIFRkDQooIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjE2Ljg5NjAgVGQNCiggdGV4dC4gQW5kIG1vcmUgdGV4dC4gQm9yaW5nLCB6enp6ei4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjA0Ljk0NDAgVGQNCiggbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDU5Mi45OTIwIFRkDQooIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNTY5LjA4ODAgVGQNCiggQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA1NTcuMTM2MCBUZA0KKCB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBFdmVuIG1vcmUuIENvbnRpbnVlZCBvbiBwYWdlIDIgLi4uKSBUag0KRVQNCmVuZHN0cmVhbQ0KZW5kb2JqDQoNCjYgMCBvYmoNCjw8DQovVHlwZSAvUGFnZQ0KL1BhcmVudCAzIDAgUg0KL1Jlc291cmNlcyA8PA0KL0ZvbnQgPDwNCi9GMSA5IDAgUiANCj4+DQovUHJvY1NldCA4IDAgUg0KPj4NCi9NZWRpYUJveCBbMCAwIDYxMi4wMDAwIDc5Mi4wMDAwXQ0KL0NvbnRlbnRzIDcgMCBSDQo+Pg0KZW5kb2JqDQoNCjcgMCBvYmoNCjw8IC9MZW5ndGggNjc2ID4+DQpzdHJlYW0NCjIgSg0KQlQNCjAgMCAwIHJnDQovRjEgMDAyNyBUZg0KNTcuMzc1MCA3MjIuMjgwMCBUZA0KKCBTaW1wbGUgUERGIEZpbGUgMiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY4OC42MDgwIFRkDQooIC4uLmNvbnRpbnVlZCBmcm9tIHBhZ2UgMS4gWWV0IG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NzYuNjU2MCBUZA0KKCBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY2NC43MDQwIFRkDQooIHRleHQuIE9oLCBob3cgYm9yaW5nIHR5cGluZyB0aGlzIHN0dWZmLiBCdXQgbm90IGFzIGJvcmluZyBhcyB3YXRjaGluZyApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY1Mi43NTIwIFRkDQooIHBhaW50IGRyeS4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NDAuODAwMCBUZA0KKCBCb3JpbmcuICBNb3JlLCBhIGxpdHRsZSBtb3JlIHRleHQuIFRoZSBlbmQsIGFuZCBqdXN0IGFzIHdlbGwuICkgVGoNCkVUDQplbmRzdHJlYW0NCmVuZG9iag0KDQo4IDAgb2JqDQpbL1BERiAvVGV4dF0NCmVuZG9iag0KDQo5IDAgb2JqDQo8PA0KL1R5cGUgL0ZvbnQNCi9TdWJ0eXBlIC9UeXBlMQ0KL05hbWUgL0YxDQovQmFzZUZvbnQgL0hlbHZldGljYQ0KL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcNCj4+DQplbmRvYmoNCg0KMTAgMCBvYmoNCjw8DQovQ3JlYXRvciAoUmF2ZSBcKGh0dHA6Ly93d3cubmV2cm9uYS5jb20vcmF2ZVwpKQ0KL1Byb2R1Y2VyIChOZXZyb25hIERlc2lnbnMpDQovQ3JlYXRpb25EYXRlIChEOjIwMDYwMzAxMDcyODI2KQ0KPj4NCmVuZG9iag0KDQp4cmVmDQowIDExDQowMDAwMDAwMDAwIDY1NTM1IGYNCjAwMDAwMDAwMTkgMDAwMDAgbg0KMDAwMDAwMDA5MyAwMDAwMCBuDQowMDAwMDAwMTQ3IDAwMDAwIG4NCjAwMDAwMDAyMjIgMDAwMDAgbg0KMDAwMDAwMDM5MCAwMDAwMCBuDQowMDAwMDAxNTIyIDAwMDAwIG4NCjAwMDAwMDE2OTAgMDAwMDAgbg0KMDAwMDAwMjQyMyAwMDAwMCBuDQowMDAwMDAyNDU2IDAwMDAwIG4NCjAwMDAwMDI1NzQgMDAwMDAgbg0KDQp0cmFpbGVyDQo8PA0KL1NpemUgMTENCi9Sb290IDEgMCBSDQovSW5mbyAxMCAwIFINCj4+DQoNCnN0YXJ0eHJlZg0KMjcxNA0KJSVFT0YNCg==" width="400" height="520" type="application/pdf">
    </details>

    ## Tables

    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 hello                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | world | this           | is | a        |
    |:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-------|----------------|----|----------|
    | table                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 1     | 2              | 3  | 4        |
    | abc                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | 123   |                |    |          |
    | ![embedded image](data:image/png;base64,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) |       | 1. hi 2. hello |    | **test** |
    ```

Ready to [Create Surveys](Create%20Surveys.md)?
