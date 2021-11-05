Proceso Calculadora
	Definir a Como Entero
	Definir b Como Entero
	Definir operacion Como Caracter
	
	Escribir "Por favor ingrese el primer numero "; Leer a
	Escribir "Por favor ingrese el segundo numero "; Leer b
	Escribir "Por favor ingrese operacion (+) (-) (*) (/)"; Leer operacion
	
	Segun operacion Hacer
		"+":
			Escribir "Resultado es " Suma(a,b)
		"-":
			Escribir "Resultado es " Restar(a,b)
		"*":
			Escribir "Resultado es " Multiplicar(a,b)
		"/":
			Escribir "Resultado es " Dividir(a,b)
		De Otro Modo:
			Escribir "Por favor ingrese un operador valido"
	Fin Segun
FinProceso

Funcion suma_retorno = Suma(a, b)
	suma_retorno = a + b
FinFuncion

Funcion restar_retorno = Restar(a, b)
	restar_retorno = a - b
FinFuncion

Funcion multiplicar_retorno = Multiplicar(a, b)
	multiplicar_retorno = a * b
FinFuncion

Funcion dividir_retorno = Dividir(a, b)
	dividir_retorno = a / b
FinFuncion