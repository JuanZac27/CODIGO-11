Proceso do_while
	Definir clave Como Entero
	
	Repetir
		Escribir "Dime tu clave de acceso "
		Leer clave
		si clave <> 1234 Entonces
			Escribir "Clave incorrecta"
		FinSi
	Hasta Que clave == 1234
	
	Escribir "Bienvenido"
FinProceso
