# Generated by Django 4.2 on 2024-12-14 16:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Akun',
            fields=[
                ('id_akun', models.AutoField(primary_key=True, serialize=False)),
                ('nama_pendaftar', models.CharField(max_length=255)),
                ('program_studi', models.CharField(max_length=100)),
                ('tempat_tanggal_lahir', models.CharField(max_length=100)),
                ('alamat', models.TextField()),
                ('jenis_kelamin', models.CharField(max_length=10)),
                ('agama', models.CharField(max_length=50)),
                ('nomor_telepon', models.CharField(max_length=15)),
            ],
        ),
        migrations.CreateModel(
            name='Beasiswa',
            fields=[
                ('id_beasiswa', models.AutoField(primary_key=True, serialize=False)),
                ('nama_beasiswa', models.CharField(max_length=255)),
                ('informasi', models.TextField()),
                ('profil', models.TextField()),
                ('jadwal_buka', models.DateField()),
                ('jadwal_tutup', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Pendaftaran',
            fields=[
                ('id_pendaftaran', models.AutoField(primary_key=True, serialize=False)),
                ('status_lolos', models.CharField(max_length=50)),
                ('IPK', models.DecimalField(decimal_places=2, max_digits=4)),
                ('nilai_rapot', models.DecimalField(decimal_places=2, max_digits=4)),
                ('id_akun', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='beasiswaalumni.akun')),
            ],
        ),
        migrations.CreateModel(
            name='PersyaratanKhusus',
            fields=[
                ('id_persyaratanKhusus', models.AutoField(primary_key=True, serialize=False)),
                ('persyaratan', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Program',
            fields=[
                ('id_program', models.AutoField(primary_key=True, serialize=False)),
                ('jenis_program', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='PengelolaanDana',
            fields=[
                ('id_pengelolaanDana', models.AutoField(primary_key=True, serialize=False)),
                ('status_pencairan', models.CharField(max_length=50)),
                ('tanggal_pencarian', models.DateField()),
                ('total_dana', models.DecimalField(decimal_places=2, max_digits=12)),
                ('id_pendaftaran', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='beasiswaalumni.pendaftaran')),
            ],
        ),
        migrations.AddField(
            model_name='pendaftaran',
            name='id_persyaratanKhusus',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='beasiswaalumni.persyaratankhusus'),
        ),
        migrations.AddField(
            model_name='pendaftaran',
            name='id_program',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='beasiswaalumni.program'),
        ),
        migrations.CreateModel(
            name='Login',
            fields=[
                ('id_login', models.AutoField(primary_key=True, serialize=False)),
                ('email', models.EmailField(max_length=254)),
                ('password', models.CharField(max_length=255)),
                ('jenis_role', models.CharField(max_length=50)),
                ('id_akun', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='beasiswaalumni.akun')),
            ],
        ),
        migrations.CreateModel(
            name='Donasi',
            fields=[
                ('id_donasi', models.AutoField(primary_key=True, serialize=False)),
                ('nama_donatur', models.CharField(max_length=255)),
                ('jumlah_donasi', models.DecimalField(decimal_places=2, max_digits=12)),
                ('status_dacc', models.CharField(max_length=50)),
                ('id_beasiswa', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='beasiswaalumni.beasiswa')),
            ],
        ),
        migrations.AddField(
            model_name='beasiswa',
            name='id_program',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='beasiswaalumni.program'),
        ),
    ]
