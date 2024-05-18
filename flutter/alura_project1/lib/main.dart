import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: Container(
        color: Colors.white,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Container(
              height: 30,
              width: 300,
              color: Colors.amber,
              child: const Text(
                "Diamond",
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.black, fontSize: 28),
              ),
            ),
            ElevatedButton(
                onPressed: () {
                  print('btn pressed');
                },
                child: Text("Press here"))
          ],
        ),
      ),
    );
  }
}
