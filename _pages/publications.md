---
title: "ZidaLab - Publications"
layout: gridlay
excerpt: "ZidaLab -- Publications."
sitemap: false
permalink: /publications/
---


# Publications

## Selected

{% assign number_printed = 0 %}
{% for publi in site.data.publist %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if publi.highlight == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
 <div class="well">
  <pubtit>{{ publi.title }}</pubtit>
  <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive" width="100%" style="float: left" />
  <p>{{ publi.description }}</p>
  <p><em>{{ publi.authors }}</em></p>
  <p><strong><a href="{{ publi.link.url }}">{{ publi.link.display }}</a></strong></p>
  <p class="text-danger"><strong> {{ publi.news1 }}</strong></p>
  <p> {{ publi.news2 }}</p>
 </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

<p> &nbsp; </p>


<!-- ## Full List of publications

{% for publi in site.data.publist %}

  {{ publi.title }} <br />
  <em>{{ publi.authors }} </em><br /><a href="{{ publi.link.url }}">{{ publi.link.display }}</a>

{% endfor %} -->


## Full List of Publications

{%- comment -%} In Press / Submitted first (original item layout) {%- endcomment -%}
{% assign _has_inpress = false %}
{% for publi in site.data.publist %}
{% assign _disp = publi.link.display | default: "" %}
{% assign _last = _disp | split: '(' | last | remove: ')' | strip %}
{% assign _yy = _last | plus: 0 %}
{% if _yy == 0 or _disp == "" or _disp contains "In Press" or _disp contains "Submitted" %}
{% assign _has_inpress = true %}
{% endif %}
{% endfor %}

{% if _has_inpress %}
### In Press / Submitted
{% for publi in site.data.publist %}
{% assign _disp = publi.link.display | default: "" %}
{% assign _last = _disp | split: '(' | last | remove: ')' | strip %}
{% assign _yy = _last | plus: 0 %}
{% if _yy == 0 or _disp == "" or _disp contains "In Press" or _disp contains "Submitted" %}
{{ publi.title }} <br />
<em>{{ publi.authors }}</em><br />{% if publi.link and publi.link.url %}<a href="{{ publi.link.url }}">{{ publi.link.display }}</a>{% else %}{{ publi.link.display }}{% endif %}

{% endif %}
{% endfor %}
{% endif %}

{%- comment -%} Build unique list of numeric years (desc) {%- endcomment -%}
{% capture _years %}{% endcapture %}
{% for p in site.data.publist %}
{% assign _disp = p.link.display | default: "" %}
{% assign _last = _disp | split: '(' | last | remove: ')' | strip %}
{% assign _y = _last | plus: 0 %}
{% if _y > 0 %}
{% assign _y_str = _y | append: "" %}
{% unless _years contains _y_str %}
{% capture _years %}{{ _years }}|{{ _y_str }}{% endcapture %}
{% endunless %}
{% endif %}
{% endfor %}
{% assign year_list = _years | split: '|' | uniq | sort | reverse %}

{%- comment -%} Render each year header + original item layout {%- endcomment -%}
{% for y in year_list %}
{% if y != "" %}
{% assign y_num = y | plus: 0 %}
### {{ y }}

{% for publi in site.data.publist %}
{% assign _disp = publi.link.display | default: "" %}
{% assign _last = _disp | split: '(' | last | remove: ')' | strip %}
{% assign _yy = _last | plus: 0 %}
{% if _yy == y_num %}
{{ publi.title }} <br />
<em>{{ publi.authors }}</em><br />{% if publi.link and publi.link.url %}<a href="{{ publi.link.url }}">{{ publi.link.display }}</a>{% else %}{{ publi.link.display }}{% endif %}

{% endif %}
{% endfor %}
{% endif %}
{% endfor %}






## Patents
<em><b>Zida Li</b>, Tao Wang, Yongjin Zhou, Zengtong Chen</em><br />
A system and method for single cell isolation using droplet microfluidics<br />
China Invention Patent Provisional Application, CN113477282A (2021)

<em><b>Zida Li</b>, Jingyi Ding, Linzhe Chen, Chi Chen</em><br />
A nucleic acid quantification method based on non-uniform droplets and image analysis<br />
China Invention Patent Provisional Application, CN114540469A (2022)

<em><b>Zida Li</b>, Qi Fang, Yujun Chai, Xiaoxiang Hu</em><br />
A Droplet Digital Enzyme-Linked Immunosorbent Assay Method, Device, and Related Medium<br />
China Invention Patent Application, ZL202410149722.7 (2024)

<em><b>Zida Li</b>, Donghao Li, Yujuan Chai, Xinyu Liu, Weidong Zheng</em><br />
A detection system and method for point-of-care blood clotting function assessment<br />
China Invention Patent Application, ZL202111620552.9 (2025)

<em><b>Zida Li</b>, Linzhe Chen, Weidong Zheng, Jieying Shan, Yihan Xie, Xinyu Liu</em><br />
A device and method for the assessement of blood viscosity using microfluidics<br />
China Invention Patent Application, ZL202110639057.6 (2021)

<em><b>Zida Li</b>, Meichi Jin, Jingyi Ding, Yi Wang, Yu Zhou</em><br />
The Multiplex Nucleic Acid Quantification Method, Device, and Medium Based on Precipitation Bright Field Image Processing<br />
China Invention Patent Application, ZL202310028332.X (2022)

<em><b>Zida Li</b>, Zhantao Zhao</em><br />
An image-activated picoinjection method, system, and equipment<br />
China Invention Patent Application, ZL202211449260.8 (2023)

<em><b>Zida Li</b>, Qi Fang, Kai Wu</em><br />
Method, device, and medium for multiple digital detection of nucleic acid with deep learning<br />
China Invention Patent Application, ZL202211516857.X (2023)

<em><b>Zida Li</b>, Xiaxia Yu, Xinyu Liu, Jieying Shan, Yihan Xie</em><br />
Simulation system and method of in vitro diagnostics<br />
China Invention Patent Application, ZL202110750662.0 (2023)

<em><b>Zida Li</b>, Lanzhu Huang, Weidong Zheng</em><br />
A fabrication method and application of soft post rings for clot retraction testing<br />
China Invention Patent Application, ZL202010260648.8 (2022)

<em>Jianping Fu, Kevin Ward, <b>Zida Li</b>, Xiang Li</em><br />
A microscale device for blood coagulation assay<br />
U.S. Patent Application, 62/304,385 (2018)

<em>Ho Cheung Shum, Alban Sauret, <b>Zida Li</b>, Yang Song</em><br />
System and method for generation of emulsions with low interfacial tension and measuring frequency vibrations in the system<br />
U.S. Patent Application, 13/839,072 (2013)


