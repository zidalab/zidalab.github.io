---
title: "ZidaLab - Pictures"
layout: piclay
excerpt: "ZidaLab -- Pictures"
permalink: /pictures/
---

# Galleries

## Group photos
{% assign number_printed = 0 %}
{% for image in site.static_files %}
    {% if image.path contains 'images/picpic/group_photos' %}
        
{% assign even_odd = number_printed | modulo: 4 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-3 clearfix">
<a href = "{{ site.url }}{{ site.baseurl }}{{ image.path }}"><img src="{{ site.url }}{{ site.baseurl }}{{ image.path }}" class="img-responsive" width="95%" style="float: left"/></a>
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

<p> &nbsp; </p>


## Defense celebration
{% assign number_printed = 0 %}
{% for image in site.static_files %}
    {% if image.path contains 'images/picpic/defense_photos' %}
        
{% assign even_odd = number_printed | modulo: 4 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-3 clearfix">
<a href = "{{ site.url }}{{ site.baseurl }}{{ image.path }}"><img src="{{ site.url }}{{ site.baseurl }}{{ image.path }}" class="img-responsive" width="95%" style="float: left"/></a>
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

<p> &nbsp; </p>



## Other photos
{% assign number_printed = 0 %}
{% for image in site.static_files %}
    {% if image.path contains 'images/picpic/other_photos' %}
        
{% assign even_odd = number_printed | modulo: 4 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-3 clearfix">
<a href = "{{ site.url }}{{ site.baseurl }}{{ image.path }}"><img src="{{ site.url }}{{ site.baseurl }}{{ image.path }}" class="img-responsive" width="95%" style="float: left"/></a>
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

<p> &nbsp; </p>


