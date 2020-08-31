---
title: Google Summer of Code 2020 with Dart
date: 2020-05-12
math: false
diagram: false
image:
  placement: 3
---
In this post, I'll be writing updates about my project during my GSoC period with Dart :partying_face:.
![Dart](https://dart.dev/assets/shared/dart-logo-for-shares.png)

# A quick word on GSoC
Google Summer of Code (GSoC) is a global program focused on bringing more student developers into open source software development. Students work with an open source organization on a 3 month programming project during their break from school.

You can learn more from their official [website](https://summerofcode.withgoogle.com/).

# How I got here
I have been working with Dart and Flutter(Dart is the language used in it) from about 2018.
So when Dart was announced in GSoC this year I was really excited and thought about applying.

There were a lot of interesting projects, but I decided to focus on writing a single
proposal (keeping my focus solely on one project). The proposal was on generation of Dart FFI bindings. This involved working with LibClang and Dart.

Project Link - https://github.com/dart-lang/ffigen

# About FFIGEN
FFIGEN is an FFI bindings generator for dart. FFI stands for **F**oreign **F**unction **I**nterface. This tool parses C/C++ header files and generates bindings which could be directly used in Dart, and for that we use LibClang.

[LibClang](https://clang.llvm.org/doxygen/group__CINDEX.html) is a C interface to Clang, using which we can parse C/C++ header files, it is used by many IDE's to provide C/C++ intellisense. We can call functions in Libclang via Dart, but first we need the dart bindings.

The [generated bindings](https://github.com/dart-lang/ffigen/blob/master/example/libclang-example/generated_bindings.dart) for libclang's headers files are **~4.5kLOC**!
Imagine writing these by hand, and what happens when libclang changes, how hard would it be to track these changes and re-write the updates. Hopefully this explains the need for having such a tool in your inventory.


That's pretty much the basics, if you would like to know more and/or contribute to this project head over to https://github.com/dart-lang/ffigen.
