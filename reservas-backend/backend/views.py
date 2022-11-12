from .models import Administrador, Clientes, Salas, Reserva_salas
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from rest_framework import status
import json

# Create your views here.
 
class AdministradorView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, *args, **kwargs):
        adminisradores= list(Administrador.objects.values())
        if len(adminisradores) > 0:
            data = { 'message': 'Successfully', 'adminisradores': adminisradores}
        else:
            data = { 'message': 'No existen administradores registrados' }
        return JsonResponse(data)

    # def post(self, request, *args, **kwargs):
    #     return HttpResponse('POST request!'))

class ClientesView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, *args, **kwargs):
        clientes= list(Clientes.objects.values())
        if len(clientes) > 0:
            listaClientes = { 'message': 'Successfully', 'clientes': clientes}
        else:
            listaClientes = { 'message': 'No existen clientes registrados' }
        return JsonResponse(listaClientes)


class SalasView(View):
    def get(self, request, *args, **kwargs):
        salas= list(Salas.objects.values())
        if len(salas) > 0:
            listaSalas = { 'message': 'Successfully', 'clientes': salas}
        else:
            listaSalas = { 'message': 'No existen salas registrados' }
        return JsonResponse(listaSalas)


class ReservasView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, *args, **kwargs):
        reservas= list(Reserva_salas.objects.values())
        if len(reservas) > 0:
            listaReservas = { 'message': 'Successfully', 'clientes': reservas}
        else:
            listaReservas = { 'message': 'No existen reservas registrados' }
        return JsonResponse(listaReservas)
        
    def post(self, request, *args, **kwargs):
        jd =  json.loads(request.body)
        data = { 'message': 'Successfully'  }
        return JsonResponse(data)





