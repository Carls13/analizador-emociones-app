# 📱 React Native App con Expo - Guía de Instalación y Ejecución

Bienvenido 👋 Esta guía explica cómo configurar tu entorno para correr una aplicación de React Native usando Expo, y cómo generar un archivo APK para Android.

---

## 🛠 Requisitos Previos

- Sistema operativo: Windows, macOS o Linux.
- Conexión a Internet.
- Un dispositivo móvil Android/iOS o un emulador Android Studio o Xcode.
- Tener instalado Node.js.

---

## 📦 Instalación de Node.js

Node.js es necesario para ejecutar herramientas como Expo CLI.

1. **Descargar Node.js**  
   - Ir a [https://nodejs.org](https://nodejs.org).
   - Descargar la **versión LTS** recomendada.

2. **Verificar la instalación**

```bash
node -v
npm -v
```

---

## 🚀 Instalación de Expo CLI

Expo es un conjunto de herramientas que simplifica el desarrollo de apps en React Native.

1. **Instalar Expo CLI de manera global**

```bash
npm install -g expo-cli
```

2. **Verificar la instalación**

```bash
expo --version
```

---

## ⚡ Crear un Nuevo Proyecto

1. **Crear un proyecto nuevo**

```bash
expo init nombre-de-tu-app
```

Selecciona una plantilla (por ejemplo, `blank`).

2. **Moverte al directorio del proyecto**

```bash
cd nombre-de-tu-app
```

---

## 📱 Correr la Aplicación

1. **Instalar dependencias**

```bash
npm install
```

2. **Iniciar el servidor de desarrollo**

```bash
expo start
```

3. **Opciones para ejecutar la app:**
   - **Dispositivo físico:**  
     Instalar la app **Expo Go** en Android o iOS.  
     Escanear el código QR que aparece en tu terminal o navegador.
   
   - **Emulador Android:**

     ```bash
     expo start --android
     ```

   - **Simulador iOS (solo Mac):**

     ```bash
     expo start --ios
     ```

---

## 🛠️ Generar un APK para Android

Expo usa **EAS Build** para construir APKs o archivos AAB.

1. **Instalar EAS CLI**

```bash
npm install -g eas-cli
```

2. **Iniciar sesión en Expo**

```bash
expo login
```

3. **Configurar EAS Build**

```bash
eas build:configure
```

4. **Construir el APK**

```bash
eas build --platform android --profile preview
```

   - Este comando subirá tu app a los servidores de Expo para construir el APK.
   - Una vez terminado, Expo te proporcionará un enlace para descargar el APK.

---

## 📥 Instalar el APK en tu Dispositivo Android

1. Transferir el archivo `.apk` a tu dispositivo (vía USB, correo, Google Drive, etc.).
2. Abrir el archivo en el dispositivo y permitir la instalación desde fuentes desconocidas si se solicita.

---

## 🧹 Comandos Rápidos

| Acción                     | Comando                          |
| --------------------------- | -------------------------------- |
| Instalar dependencias       | `npm install`                    |
| Iniciar el proyecto         | `expo start`                     |
| Ejecutar en Android         | `expo start --android`           |
| Ejecutar en iOS             | `expo start --ios`               |
| Construir APK para Android  | `eas build --platform android`   |

---

## 📚 Recursos Útiles

- [Documentación Oficial de React Native](https://reactnative.dev/)
- [Documentación de Expo](https://docs.expo.dev/)
- [Documentación de EAS Build](https://docs.expo.dev/build/introduction/)

---

## ✨ ¡Todo Listo!

Ahora puedes desarrollar, probar y construir tu aplicación móvil.  
¡Mucho éxito! 🚀
