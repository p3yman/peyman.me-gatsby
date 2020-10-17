---
title: Create a simple URL Shortener for your website using Vercel
date: 2020-10-17
description: URLs could be long. Very long. Learn how to create a simple URL Shortener for your website using Vercel redirects feature.
tags: vercel, cli, redirects, deploy
---

![Create a simple URL Shortener for your website using Vercel](./cover.jpg)

URLs could be long. Very long. When you have a blog, you try to create the URLs with meaningful sentences like `working-with-new-suspense-system-in-react-17`. It actually is a good title for the SEO matters but it's a real bummer to share. It's way too long to be transferred easily and quite ugly in full address:

https://peyman.me/blog/working-with-new-suspense-system-in-react-17

But there should be a way between choosing that or something like `react-17-suspense`. Actually, there is a simple way when you use something like Vercel or Netlify. These services provide a way to help you redirect from an internal path to another URL. The target could be either internal or external. 

So, what that mean to us? We could take advantage of this feature as a URL shortener service. You can create a smaller address for every path you want and then share that very small URL with others.

### So, how we do that?

Easy! First, create a config file for your Vercel project called `vercel.json`.

Then add a `redirects` property to it and fill it with an array like this:

```json
{
  "redirects": [
    {
			"source": "/react-17-suspence",
			"destination": "/blog/working-with-new-suspense-system-in-react-17"
    },
    {
			"source": "/gh",
			"destination": "https://github.com/p3yman"
		}
  ]
}
```

Just set the source and the destination and you're good to go!

You have a third option called `permanent` which is a boolean. This is the direct quote from the Vercel documentations:

> `permanent`: A boolean to toggle between permanent and temporary redirect (default true). When true, the status code is 308. When false the status code is 307.

There is only one very important point here:

You could use this feature in your local environment using Vercel CLI tool. So, if you're developing a React or Vue or Gatsby project, it'll not work with the `npm run serve` or whatever script you use. It should be served by the Vercel, so it could make the environment not just for this feature, also for a lot of other things like routing or Serverless Functions.

You could read about the Vercel CLI here on its [official documentations](https://vercel.com/docs/cli).

As you can check, you could open this post using [this shorten URL](/vercel-redirects), and also you could see my Github page from [/gh](/gh) link.
