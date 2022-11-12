from django.db import models

class Administrador(models.Model):
    idAdministrador = models.AutoField(primary_key = True)
    cedula = models.CharField(("Ingrese número de cédula"), max_length=10, null = False, blank = True)
    nombres = models.CharField(("Ingrese nombres"), max_length=50, null = False, blank = True)
    cargo = models.CharField(("Ingrese cargo"), max_length=50, null = False, blank = True)
    rol = models.CharField(("Ingrese rol"), max_length=50, null = False, blank = True)
    estado = models.CharField(("Ingrese estado"), max_length=50, null = False, blank = True)
    usuario = models.CharField(("Ingrese usuario"), max_length=50, null = False, blank = True)
    password = models.CharField(("Ingrese contraseña"), max_length=10, null = False, blank = True)
    
    class Meta:
        verbose_name: "Administrador"
        verbose_name_plural: "Administrador"
    
    def __str__(self):
        return self.nombres

class Clientes(models.Model):
    idCliente = models.AutoField(primary_key=True)
    cedula = models.CharField(("Ingrese número de cédula"), max_length=10, null = False, blank = True)
    nombres = models.CharField(("Ingrese nombres"), max_length=50, null = False, blank = True)
    departamento = models.CharField(("Ingrese departamento"), max_length=50, null = False, blank = True)
    cargo = models.CharField(("Ingrese cargo"), max_length=50, null = False, blank = True)

    class Meta:
        verbose_name: "Cliente"
        verbose_name_plural: "Clientes"
    
    def __str__(self):
        return self.nombres

class Salas(models.Model):
    idSalas = models.AutoField(primary_key=True)
    nombres = models.CharField(("Ingrese nombres"), max_length=50, null = False, blank = True)
    ubicacion = models.CharField(("Ingrese ubicacion"), max_length=50, null = False, blank = True)

    class Meta:
        verbose_name: "Sala"
        verbose_name_plural: "Salas"
    
    def __str__(self):
        return self.nombres


class Reserva_salas(models.Model):
    idReservas = models.AutoField(primary_key=True)
    fecha = models.DateField(("Ingrese fecha a reservar"), auto_now=False, auto_now_add=False)
    horaInicio = models.DateTimeField(("Ingrese hora inicio"), auto_now=False, auto_now_add=False)
    horaFin = models.DateTimeField(("Ingrese hora fin"), auto_now=False, auto_now_add=False)
    estado = models.CharField(("Ingrese estado"), max_length=10, null = False, blank = True)
    motivo = models.CharField(("Ingrese motivo"), max_length=50, null = False, blank = True)
    fk_idCliente = models.ForeignKey(Clientes, on_delete=models.CASCADE)
    fk_idSalas = models.ForeignKey(Salas, on_delete=models.CASCADE)

    class Meta:
        verbose_name: "Reserva"
        verbose_name_plural: "Reservas"
    
    def __str__(self):
        return self.motivo