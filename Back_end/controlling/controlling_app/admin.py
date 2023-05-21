from django.contrib import admin
from .models import User, Portfolio, Asset, Operation

# Register your models here.



admin.site.register(User)
admin.site.register(Portfolio)
admin.site.register(Asset)
admin.site.register(Operation)