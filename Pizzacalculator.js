// Gerben Pellekaan
// Software Developer


// TO DO:
//prompt = Hoeveel pizza's wilt u?
//document.write = De hoeveelheid pizza's.
//document.write = <br> (Voor volgende regel).
//document.write = Totale hoeveelheid geld voor 1 of meerdere pizza's.
//document.write = Totale eind bedrag.
//small = a, medium = b, large = c.


invoer= parseInt(prompt('Hoeveel kleine pizzas wilt u?'));
document.writeln (invoer)
document.write ('kleine pizza(s) =')
document.write ('<br>')
document.writeln (invoer * 8.99)
document.write ('Euro')
a = invoer * 8.99


document.write ('<br> <br>')

invoer = parseInt(prompt('Hoeveel normale pizzas wilt u?'));
document.writeln (invoer)
document.write ('normale pizza(s) =')
document.write ('<br>')
document.writeln (invoer * 15.99)
document.write ('Euro')
b = invoer * 15.99

document.write ('<br> <br>')

invoer = parseInt(prompt('Hoeveel grote pizzas wilt u?'));
document.writeln (invoer)
document.write ('grote pizza(s) =')
document.write ('<br>')
document.writeln (invoer * 19.99)
document.write ('Euro')
c = invoer * 19.99

document.write ('<br> <br>')

document.write ('Uw totale bedrag is:')
document.write ('<br>')
document.writeln (a + b + c)
document.writeln ('Euro')
