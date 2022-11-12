# from django.urls import path
# from .views import AdministradorView, ClientesView, SalasView, ReservasView

# urlpatterns = [
#     path('administradores/', AdministradorView.as_view(), name='administradores'),
#     path('clientes/', ClientesView.as_view(), name='clientes'),
#     path('salas/', SalasView.as_view(), name='salas'),
#     path('reservas/', ReservasView.as_view(), name='reservas')
# ]


# from rest_framework import routers 
# from .api import RerservasViewSet, SalasViewSet, ClientesViewSet, AdministradorViewSet

# router = routers.DefaultRouter()
# router.register('api/reservas', RerservasViewSet, 'reservas')
# router.register('api/salas', SalasViewSet, 'salas')
# router.register('api/clientes', ClientesViewSet, 'clientes')
# router.register('api/administrador', AdministradorViewSet, 'administrador')

# urlpatterns = router.urls

from django.urls import path
from .api import RerservasViewSet, SalasViewSet, ClientesViewSet, AdministradorViewSet

urlpatterns = [
	path('api/reservas-list/', RerservasViewSet.listReserva, name="Listar-reservas"),
	path('api/reservas/<str:pk>/', RerservasViewSet.reserva, name="Reserva"),
	path('api/reservas-update/<str:pk>/', RerservasViewSet.updateReserva, name="Actualizar-reserva"),
	path('api/reservas-create/', RerservasViewSet.registerReserva, name="Crear-reserva"),
	path('api/reservas-delete/<str:pk>/', RerservasViewSet.deleteReserva, name="Eliminar-reserva"),
	path('api/salas/', SalasViewSet.listarSalas, name="Salas"),
	path('api/clientes/', ClientesViewSet.listarClientes, name="Clientes"),
	path('api/administrador/', AdministradorViewSet.listarAdministradores, name="Administradores")
]