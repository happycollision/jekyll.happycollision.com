---
title: Vagrantfile that creates and populates MySQL database
date: 2014-01-17
layout: $layouts/Page.astro
---

A few months ago, I started poking around a [Discourse][1] install. I was a bit
hesitant to start learning a whole new language (Ruby) on the chance that I
could find a good use for Discourse in my work. I found a one, but it will be a
while before I'll actually implement it.

As I was fumbling around the installation guide, it slowly dawned on me that
this [Vagrant][2] thing I was using via their instruction is amazing.

If you don't know, Vagrant is a fantastic piece of software that allows you
"create and configure lightweight, reproducible, and portable development
environments." Basically, you can spin up a server with one command and have all
your dev files sitting in a folder that is already mounted to the VM.

This actually solves a little problem I've had. Tons of my older work depends on
MySQL databases to run at all, so when I need to test something or work on a new
feature, I tend toward [cowboy coding][3]. It's bitten me a couple times, but
the _thought_ of installing MAMP (or installing MySQL on my Mac) and configuring
MySQL just because I need a running database to work on a little bit of php...

But now I am using Vagrant, so it's a little easier. But the big relief comes
with the little script I wrote that I embed in the Vagrantfile. It looks for a
file with the extension `.sql` and creates a database and user in MySQL with the
name of the file. So if your file is `webapp.sql` then the script creates a
database called `webapp` and a user by the same name with "pass" as their
password. Then, it *loads the sql into the database*. Done.

Now whenever I need to whip up a quick little feature for an old project, I put
this Vagrantfile in the root directory of the application along with the last
MySQL backup file I made, type `vagrant up` in the terminal, grab a drink and
start working. [Here's the script][4]. I hope it is useful for you as well.

[1]: http://discourse.org
[2]: http://vagrantup.com
[3]: http://www.bnj.com/blog/cowboy-coding-pink-sombrero/
[4]: https://gist.github.com/happycollision/8469423
