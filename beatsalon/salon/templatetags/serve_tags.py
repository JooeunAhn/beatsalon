from django import template

register = template.Library()

@register.filter
def to_underbar(value):
    pre = value[0:5]
    value = value[5:]
    return (pre + value.replace("/","_"))

@register.filter
def escape(value):
    print(value)