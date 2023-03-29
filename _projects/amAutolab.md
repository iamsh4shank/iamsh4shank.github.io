---
layout: page
title: AmAutolab 
description: AmAutolab is a tool for automating the task of assignment evaluation using Python scripts with proper evaluation schemes and dynamic problem and score handling. 
img: 
importance: 3
category: work
---

AmAutolab is a tool for automating the task of assignment evaluation using Python scripts with proper evaluation schemes and dynamic problem and score handling. Problems can be updated and mapped with decided scoring and grading
patterns. This is developed over Autolab by CMU with configuration changes. It also has a python package for making it possible in few commands.

## Instructions

- Setting up a new lab

    - Run following command to create lab `autolab -l <directory_name> <lab_name> <handout_file_name>`
    - The above command will generate a directory named `<lab_name>` with structure as follows
        ```
        grade.py             - A template for grading files for problems
        Autograde-Makefile   - Set of commands to run grade.py on Autolab
        handout               - A directory containing `functions.py`   
        exercise file
        handout/<handout_file_name>  - Handout file for student
        ```
    - Modify `grade.py` and `<handout_file_name>.py` file with your problems.
    - Next run following commands to create your final tarball for autolab
        ```
        autolab -c <lab_location> <lab_name> <handout_file_name>
        ```
    - And it's done, now you will find a tar called `<lab_name>.tar`, just go and upload it in autolab

- Working with AmAutolab package
    - For installing this package to your local system, go to `AmAutolab` directory and run following commands
        ```
        python3 -m pip install dist/AmAutolab-0.1-py3-none-any.whl
        ```
    - After running above command you will get output something like this - 
        ```
        Processing ./dist/AmAutolab-0.1-py3-none-any.whl
        Installing collected packages: AmAutolab
        Successfully installed AmAutolab-0.1

        ``` 
    - Run `autolab -h` if you need help with the package commands.

