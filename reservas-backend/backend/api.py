from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets, permissions
from django.http import JsonResponse
from .models import Administrador, Clientes, Salas, Reserva_salas
from .serializers import ReservasSeralizer, SalasSeralizer, ClientesSeralizer, AdministradorSeralizer, ReservasRegistroSeralizer

class RerservasViewSet(viewsets.ModelViewSet):
    
    @api_view(['GET'])
    def listReserva(request):
        queryset  = Reserva_salas.objects.all()
        serializer_class = ReservasSeralizer(queryset, many=True)
        return Response(serializer_class.data)    

    @api_view(['GET'])
    def reserva(request, pk):
        queryset  = Reserva_salas.objects.get(idReservas=pk)
        serializer_class = ReservasSeralizer(queryset, many=False)
        return Response(serializer_class.data)    

    @api_view(['DELETE'])
    def deleteReserva(request, pk):
        reserva = Reserva_salas.objects.get(idReservas=pk)
        reserva.delete()
        return Response('Item succsesfully delete!')
    
    @api_view(['POST'])
    def registerReserva(request):
        serializer = ReservasRegistroSeralizer(data=request.data)
        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)

    @api_view(['POST'])
    def updateReserva(request, pk):
        task = Reserva_salas.objects.get(idReservas=pk)
        serializer = ReservasRegistroSeralizer(instance=task, data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)

class SalasViewSet(viewsets.ModelViewSet):
    
    @api_view(['GET'])
    def listarSalas(request):
        queryset  = Salas.objects.all()
        serializer_class = SalasSeralizer(queryset, many=True)
        return Response(serializer_class.data)    


class ClientesViewSet(viewsets.ModelViewSet):

    @api_view(['GET'])
    def listarClientes(request):
        queryset  = Clientes.objects.all()
        serializer_class = ClientesSeralizer(queryset, many=True)
        return Response(serializer_class.data)    

class AdministradorViewSet(viewsets.ModelViewSet):

    @api_view(['GET'])
    def listarAdministradores(request):
        queryset  = Administrador.objects.all()
        serializer_class = AdministradorSeralizer(queryset, many=True)
        return Response(serializer_class.data)    
