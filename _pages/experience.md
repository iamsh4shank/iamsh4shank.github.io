---
layout: page
title: experience
permalink: /experience/
display_categories: [Education, Work, Volunteer]
desc: Some of my experience for more information check out my <a href="https://iamsh4shank.github.io/docs/cv.pdf">CV</a>
nav: true
nav_order: 3
---

<div class="experience">

    <h2 class="category">{{ page.display_categories[0] }}</h2>
    {% for education in site.data.experience.education %}
      {% include experience/education.html education=education %}
    {% endfor %}

    <h2 class="category">{{ page.display_categories[1] }}</h2>
    {% for work in site.data.experience.work %}
      {% include experience/work.html work=work %}
    {% endfor %}

    <h2 class="category">{{ page.display_categories[2] }}</h2>
    {% for volunteer in site.data.experience.volunteer %}
      {% include experience/volunteer.html volunteer=volunteer %}
    {% endfor %}
</div>