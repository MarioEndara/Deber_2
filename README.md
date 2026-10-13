APLICACIÓN MOVIL COMPRA Y PAGO
CARACTERÍSTICAS

Gestion de Pestañas (tabs) personalizadas
Pestaña de Compra- Formulario para registrar nombre del producto,cantidad(entera mayor que cero) y precio unitario(mayor que cero)
Pestaña Pago - Recibe el subtotal de la compra, solicita un descuento porcentual(0-100) y dinero entregado por el cliente, calcula el total y el cambio a entregar al cliente

Pesonalización Nativa con @capacitor/assets
Ícono personalizado de la aplicación adaptado para dispositivos Android
Pantalla de carga (Splash Screen) configurada al iniciar la aplicación

Íconos personalizados en la Navegación
Cada pestaña cuenta con un ícono representativo e independiente en la barra de navegación

Servicio de Datos compartidos
Implementación de un servicio en Angular para la comunicación segura de datos entre componentes

Herramienta utilizadas
Framework: Ionic v8 & Angular(Standalone Components)
Plataforma Movil: Capacitor V8 (Android Runtime)
Gestión de Versiones: Git GitHub
Entorno de desarrollo: Visual Studio Code
Librerias @capacitor/assets (recursos gráficos nativos)

Estructura del Proyecto
compra-app/
│
├── src/
│   ├── app/
│   │   ├── services/
│   │   │   └── datos.ts           Servicio para compartir datos de compra
│   │   ├── Compra/                Pestaña Compra (Formulario y validaciones)
│   │   ├── Pago/                  Pestaña Pago (Cálculo de descuento y cambio)
│   │   └── ...
│   ├── assets/                    Recursos gráficos (icon.png, splash.png)
│   └── ...
├── android/                       Proyecto nativo Android generado por Capacitor
└── README.md                      Documentación del repositorio

INSTALACIÓN Y EJECUCIÓN LOCAL
git clone [https://github.com/MarioEndara/compra-app.git]
cd compra-app

Instalación de dependencias
npm install

Generar Recursos Nativos(Icono y Splash Screen)
npx capacitor-assets generate

Sincronizar con plataforma Android
npx cap sync android

Abrir Android Studio
npx cap open android

EVIDENCIAS
Creacion carpeta compra
<img width="665" height="259" alt="Creacion de la carpeta compra" src="https://github.com/user-attachments/assets/3769db08-6c31-4ca1-b422-db914975824a" />
Servidor para compartir datos
<img width="665" height="285" alt="Servicio para compartir datos(Compra-Pagos)" src="https://github.com/user-attachments/assets/4fd6c975-bd7d-4862-9428-a636fb28381c" />
Renombrar tab1 y tab2 con Compra y Pago
<img width="228" height="385" alt="renombrar la tab1 y tab2 con Compra y Pago" src="https://github.com/user-attachments/assets/fb256aa4-e06b-496b-8320-c021081f727c" />
Requerimiento personalizado
<img width="434" height="304" alt="Requerimiento personalizado" src="https://github.com/user-attachments/assets/4a9987b7-9b6b-40bb-95f1-7b83fcf45c77" />
Instalacion de assets
<img width="272" height="100" alt="Instalación de assets" src="https://github.com/user-attachments/assets/fdb1e823-05ee-4258-ac65-51ef58748dfb" />
Aplicación
<img width="720" height="1600" alt="Aplicación" src="https://github.com/user-attachments/assets/ade35ed4-c12a-4249-8a35-6cb2d937fe3b" />
Icono
<img width="720" height="1600" alt="Icono" src="https://github.com/user-attachments/assets/0a9dc0c4-b441-466a-8f89-6684e0341db9" />
Splash Screen
<img width="720" height="1600" alt="Splash Screen" src="https://github.com/user-attachments/assets/18ecbe7f-b09a-4dd0-9888-01c51378e2dc" />









