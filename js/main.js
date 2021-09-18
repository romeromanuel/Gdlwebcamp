(function () {
  "use strict";

  var regalo = document.getElementById("regalo");

  document.addEventListener("DOMContentLoaded", function () {

    // Solución al problema de Mapa Leatflet
    if (document.getElementById("mapa")) {
      var map = L.map("mapa").setView([10.724248, -71.623513], 16);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker([10.724248, -71.623513])
        .addTo(map)
        .bindPopup("GDLWEBCAMP 2020 <br> Boletos disponibles.")
        .openPopup();
    }

    // Campos Datos Usuario
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var email = document.getElementById("email");

    // Campos Pases
    var pase_dia = document.getElementById("pase_dia");
    var pase_dosdias = document.getElementById("pase_dosdias");
    var pase_completo = document.getElementById("pase_completo");

    // Botones y divs
    var calcular = document.getElementById("calcular");
    var errorDiv = document.getElementById("error");
    var suma = document.getElementById("suma-total");

    // Extras
    var camisas = document.getElementById("camisa_evento");
    var etiquetas = document.getElementById("etiquetas");

    // Solución al error de Función de calcularMontos  
    if (document.getElementById('calcular')) {

      calcular.addEventListener("click", calcularMontos);

      pase_dia.addEventListener("change", mostrarDias);
      pase_dosdias.addEventListener("change", mostrarDias);
      pase_completo.addEventListener("change", mostrarDias);

      nombre.addEventListener("blur", validarCampos);
      apellido.addEventListener("blur", validarCampos);
      email.addEventListener("blur", validarCampos);
      email.addEventListener("blur", validarMail);

      function validarCampos() {
        if (this.value == "" || this.value == " ") {
          errorDiv.style.display = "block";
          errorDiv.innerHTML = "Este campo es obligatorio";
          errorDiv.style.color = "red";
          errorDiv.style.fontSize = "1.4rem";
          this.style.border = "1px solid red";
          errorDiv.style.border = "1px solid red";
        } else {
          errorDiv.style.display = "none";
          this.style.border = "1px solid rgb(118, 118, 118)";
        }
      }

      function validarMail() {
        if (this.value.indexOf("@") > -1) {
          errorDiv.style.display = "none";
          this.style.border = "1px solid rgb(118, 118, 118)";
        } else {
          errorDiv.style.display = "block";
          errorDiv.innerHTML = "Debe contener un @";
          errorDiv.style.color = "red";
          errorDiv.style.fontSize = "1.4rem";
          this.style.border = "1px solid red";
          errorDiv.style.border = "1px solid red";
        }
      }

      function calcularMontos(event) {
        event.preventDefault();
        if (regalo.value === "") {
          alert("Debes elegir un regalo");
          regalo.focus();
        } else {
          var boletosDia = parseInt(pase_dia.value, 10) || 0,
            boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
            boletoCompleto = parseInt(pase_completo.value, 10) || 0,
            cantCamisas = parseInt(camisas.value, 10) || 0,
            cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

          var totalPagar =
            boletosDia * 30 +
            boletos2Dias * 45 +
            boletoCompleto * 50 +
            cantCamisas * 10 * 0.93 +
            cantEtiquetas * 2;

          var listadoProductos = [];

          if (boletosDia === 1) {
            listadoProductos.push(boletosDia + " Pase por día");
          } else if (boletosDia > 1) {
            listadoProductos.push(boletosDia + " Pases por día");
          }
          if (boletos2Dias === 1) {
            listadoProductos.push(boletos2Dias + " Pase por 2 días");
          } else if (boletos2Dias > 1) {
            listadoProductos.push(boletos2Dias + " Pases por 2 días");
          }
          if (boletoCompleto === 1) {
            listadoProductos.push(boletoCompleto + " Pase Completo");
          } else if (boletoCompleto > 1) {
            listadoProductos.push(boletoCompleto + " Pases Completos");
          }
          if (cantCamisas === 1) {
            listadoProductos.push(cantCamisas + " Camisa");
          } else if (cantCamisas > 1) {
            listadoProductos.push(cantCamisas + " Camisas");
          }
          if (cantEtiquetas === 1) {
            listadoProductos.push(cantEtiquetas + " Etiqueta");
          } else if (cantEtiquetas > 1) {
            listadoProductos.push(cantEtiquetas + " Etiquetas");
          }

          lista_productos.style.display = "block";
          lista_productos.innerHTML = "";
          for (var i = 0; i < listadoProductos.length; i++) {
            lista_productos.innerHTML += listadoProductos[i] + "</br>";
          }

          suma.innerHTML = "$" + totalPagar.toFixed(2);
          /*suma.innerHTML = totalPagar.toLocaleString('en', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          });*/
        }
      } // funcion calcularMontos
    }

    function mostrarDias() {
      var boletosDia = parseInt(pase_dia.value, 10) || 0,
        boletos2Dias = parseInt(pase_dosdias.value, 10) || 0,
        boletoCompleto = parseInt(pase_completo.value, 10) || 0;

      var diasElegidos = [];

      if (boletosDia > 0) {
        diasElegidos.push("viernes");
        console.log(diasElegidos);
      } else {
        viernes.style.display = "none";
      }
      if (boletos2Dias > 0) {
        diasElegidos.push("viernes", "sabado");
        console.log(diasElegidos);
      } else {
        sabado.style.display = "none";
      }
      if (boletoCompleto > 0) {
        diasElegidos.push("viernes", "sabado", "domingo");
        console.log(diasElegidos);
      } else {
        domingo.style.display = "none";
      }

      for (var i = 0; i < diasElegidos.length; i++) {
        document.getElementById(diasElegidos[i]).style.display = "block";
      }
    } //Función mostrarDias
  }); // DOM CONTEND LOADED 
})();

var btnRegistro = document.getElementById("btnRegistro");
var lista_productos = document.getElementById("lista-productos");


$(function () {

  // Lettering
  $('.nombre-sitio').lettering();

  // Menú fijo
  var windowHeight = $(window).height();
  var barraAltura = $('.barra').innerHeight();

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > windowHeight) {
      $('.barra').addClass('fixed');
      $('body').css({
        'margin-top': barraAltura + 'px'
      });
    } else {
      $('.barra').removeClass('fixed');
      $('body').css({
        'margin-top': '0px'
      });
    }
  });

  // Menú Responsive
  $('.menu-movil').on('click', function () {
    $('.navegacion-principal').slideToggle();

    $(window).resize(function () {
      var anchoVentana = $(window).width();
      if (anchoVentana > 768) {
        $('.navegacion-principal').css({
          'display': 'block'
        });
      } else {
        $('.navegacion-principal').css({
          'display': 'none'
        });
      }
    });
  });

  // PROGRAMA DE CONFERENCIA

  // Mostramos por default el primero
  $('.programa-evento .info-curso:first').show();
  $('.menu-programa a:first').addClass('activo');

  $('.menu-programa a').on('click', function () {
    $('.menu-programa a').removeClass('activo');
    $(this).addClass('activo');

    // Ocultamos todos los eventos
    $('.ocultar').hide();

    // Obtenemos el href del cual el usuario le dio click
    var enlace = $(this).attr('href');

    // Mostramos el correspondiente
    $(enlace).fadeIn(1000);

    return false;
  });

  // Animaciones para los números
  $('.contador').on('mouseenter', function () {

    $('.resumen-evento li:nth-child(1) p').animateNumber({
      number: 6
    }, 1200);
    $('.resumen-evento li:nth-child(2) p').animateNumber({
      number: 15
    }, 1200);
    $('.resumen-evento li:nth-child(3) p').animateNumber({
      number: 3
    }, 1500);
    $('.resumen-evento li:nth-child(4) p').animateNumber({
      number: 9
    }, 1500);
  });

  // Cuenta Regresiva
  $('.cuenta-regresiva').countdown('2021/12/10 12:00:00', function (event) {
    $('#dias').text(event.strftime('%D'));
    $('#horas').text(event.strftime('%H'));
    $('#minutos').text(event.strftime('%M'));
    $('#segundos').text(event.strftime('%S'));
  });
});
