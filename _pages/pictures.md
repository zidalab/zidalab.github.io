---
title: "ZidaLab - Pictures"
layout: piclay
excerpt: "ZidaLab -- Pictures"
permalink: /pictures/
---

# Galleries

<div class="gallery-intro" markdown="1">

Life in ZidaLab includes experiments, meetings, celebrations, defenses, and time together outside the lab. These photos offer a quick look at the people and moments behind our research.

</div>

## Group Photos

<p class="gallery-section-note">Group photos, outings, meals, and shared lab moments.</p>

{% assign number_printed = 0 %}
{% for image in site.static_files %}
    {% if image.path contains 'images/picpic/group_photos' %}

{% assign even_odd = number_printed | modulo: 4 %}

{% if even_odd == 0 %}
<div class="row gallery-row">
{% endif %}

<div class="col-sm-3 clearfix">
{% assign image_title = image.name | split: '.' | first | replace: '_', ' ' | replace: '-', ' ' %}
<a class="gallery-card" href="{{ site.url }}{{ site.baseurl }}{{ image.path }}"><img src="{{ site.url }}{{ site.baseurl }}{{ image.path }}" class="img-responsive" alt="{{ image_title }}" loading="{% if number_printed < 4 %}eager{% else %}lazy{% endif %}" fetchpriority="{% if number_printed < 4 %}high{% else %}auto{% endif %}" decoding="async" /><span class="gallery-card-caption">{{ image_title }}</span></a>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd > 2 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 4 %}
{% if even_odd == 1 %}
</div>
{% endif %}

{% if even_odd == 2 %}
</div>
{% endif %}

{% if even_odd == 3 %}
</div>
{% endif %}

## Defense Celebrations

<p class="gallery-section-note">Milestones from thesis defenses and graduation moments.</p>

{% assign number_printed = 0 %}
{% for image in site.static_files %}
    {% if image.path contains 'images/picpic/defense_photos' %}

{% assign even_odd = number_printed | modulo: 4 %}

{% if even_odd == 0 %}
<div class="row gallery-row">
{% endif %}

<div class="col-sm-3 clearfix">
{% assign image_title = image.name | split: '.' | first | replace: '_', ' ' | replace: '-', ' ' %}
<a class="gallery-card" href="{{ site.url }}{{ site.baseurl }}{{ image.path }}"><img src="{{ site.url }}{{ site.baseurl }}{{ image.path }}" class="img-responsive" alt="{{ image_title }}" loading="lazy" decoding="async" /><span class="gallery-card-caption">{{ image_title }}</span></a>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd > 2 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 4 %}
{% if even_odd == 1 %}
</div>
{% endif %}

{% if even_odd == 2 %}
</div>
{% endif %}

{% if even_odd == 3 %}
</div>
{% endif %}

## Lab And Other Moments

<p class="gallery-section-note">Snapshots from experiments, meetings, teaching, maintenance, and informal lab life.</p>

{% assign number_printed = 0 %}
{% for image in site.static_files %}
    {% if image.path contains 'images/picpic/other_photos' %}

{% assign even_odd = number_printed | modulo: 4 %}

{% if even_odd == 0 %}
<div class="row gallery-row">
{% endif %}

<div class="col-sm-3 clearfix">
{% assign image_title = image.name | split: '.' | first | replace: '_', ' ' | replace: '-', ' ' %}
<a class="gallery-card" href="{{ site.url }}{{ site.baseurl }}{{ image.path }}"><img src="{{ site.url }}{{ site.baseurl }}{{ image.path }}" class="img-responsive" alt="{{ image_title }}" loading="lazy" decoding="async" /><span class="gallery-card-caption">{{ image_title }}</span></a>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd > 2 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 4 %}
{% if even_odd == 1 %}
</div>
{% endif %}

{% if even_odd == 2 %}
</div>
{% endif %}

{% if even_odd == 3 %}
</div>
{% endif %}
