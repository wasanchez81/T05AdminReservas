from rest_framework import serializers
from .models import Administrador, Clientes, Salas, Reserva_salas


class ClientesSeralizer( serializers.ModelSerializer ):
    class Meta:
        model = Clientes
        fields = '__all__'

class SalasSeralizer( serializers.ModelSerializer ):
    class Meta:
        model = Salas
        fields = '__all__'

class AdministradorSeralizer( serializers.ModelSerializer ):
    class Meta:
        model = Administrador
        fields = '__all__'

class ReservasSeralizer( serializers.ModelSerializer ):
    fk_idCliente = ClientesSeralizer()
    fk_idSalas = SalasSeralizer()
    class Meta:
        model = Reserva_salas
        fields = '__all__'

class ReservasRegistroSeralizer( serializers.ModelSerializer ):
    class Meta:
        model = Reserva_salas
        fields = '__all__'
