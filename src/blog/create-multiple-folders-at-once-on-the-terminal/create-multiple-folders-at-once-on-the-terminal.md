---
title: Create multiple folders at once on the terminal
date: 2020-08-08
description: Sometimes it's hard to make multiple folders on a target folder. This is a simple trick to make it as fast as it can be.
tags: tips, tricks, terminal, cli
cover: cover.jpeg
---

I think you are familiar with the problem. You start a new project and to make the structure you should do something like this:

```shell
mkdir new-project && cd new-project
mkdir src && cd src

// Create folders
mkdir components
mkdir assets
mkdir configs
mkdir locales
// ...
// WHAT THE HELL?
```

This is so frustrating! There should be a better solution 🤔

<!-- ![Solution](https://media.giphy.com/media/7btytajHbE7xm/giphy.gif) -->

You can use this syntax to create multiple folders in a directory at once. Plain and simple:

```shell
mkdir -p new-project/src/{components,assets,configs,locales}
```

😲 Just that?
Yes, just that. But let's review what happened here:
- You use `-p` to create sub-directories and on each level, if it doesn't exist, it makes sure that it will be.

- Then with `{}` you pass a comma-separated list of names to create multiple directories beside each other.

---
Wasn't that bad, hah?

<!-- ![Problem solved](https://media.giphy.com/media/5bivKwxhVzshNk2Rjw/giphy.gif) -->