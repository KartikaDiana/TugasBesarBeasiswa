from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

from rest_framework import viewsets
from .models import Akun, Login, Program, Beasiswa, Donasi, PengelolaanDana, PersyaratanKhusus, Pendaftaran, Pengumpulan
from .serializer import AkunSerializer, LoginSerializer, ProgramSerializer, BeasiswaSerializer, DonasiSerializer, PengelolaanDanaSerializer, PersyaratanKhususSerializer, PendaftaranSerializer, PengumpulanSerializer

class AkunViewSet(viewsets.ModelViewSet):
    queryset = Akun.objects.all() 
    serializer_class = AkunSerializer  

class LoginViewSet(viewsets.ModelViewSet):
    queryset = Login.objects.all() 
    serializer_class = LoginSerializer

class ProgramViewSet(viewsets.ModelViewSet):
    queryset = Program.objects.all() 
    serializer_class = ProgramSerializer 

class BeasiswaViewSet(viewsets.ModelViewSet):
    queryset = Beasiswa.objects.all() 
    serializer_class = BeasiswaSerializer 

class DonasiViewSet(viewsets.ModelViewSet):
    queryset = Donasi.objects.all() 
    serializer_class = DonasiSerializer 

class PengelolaanDanaViewSet(viewsets.ModelViewSet):
    queryset = PengelolaanDana.objects.all() 
    serializer_class = PengelolaanDanaSerializer

class PersyaratanKhususViewSet(viewsets.ModelViewSet):
    queryset = PersyaratanKhusus.objects.all() 
    serializer_class = PersyaratanKhususSerializer

class PendaftaranViewSet(viewsets.ModelViewSet):
    queryset = Pendaftaran.objects.all() 
    serializer_class = PendaftaranSerializer 

class PengumpulanViewSet(viewsets.ModelViewSet):
    queryset = Pengumpulan.objects.all() 
    serializer_class = PengumpulanSerializer 