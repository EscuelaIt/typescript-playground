// Type aliases
type Base64 = string

interface Camera {
  image: Base64
}

interface Logger {
  log(message: string): void
}

class ConsoleLogger implements Logger {
  log(message: string) {
    console.log(message)
  }
}

class AlertLogger implements Logger {
  log(message: string) {
    alert(message)
  }
}
