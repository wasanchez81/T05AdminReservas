from django.contrib import admin
from .models import Administrador, Clientes, Salas, Reserva_salas

# Register your models here.
admin.site.register(Administrador)
admin.site.register(Clientes)
admin.site.register(Salas)
admin.site.register(Reserva_salas)
