import 'package:alura_1/alura_1.dart' as alura_1;

void main(List<String> arguments) {
  const idade = 256;
  final altura = 1.25;
  var test = idade != altura;
  var other_test = ["test"];
  other_test.every((test) => test != '');

  print('Hello world: ${alura_1.calculate()}!');

  switch (idade) {
    case 1:
    case 2:
    case 256:
      print('object');
      break;
    default:
      print('default');
      break;
  }
}
