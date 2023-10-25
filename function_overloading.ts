interface Coordinate {
  x: number
  y: number
}

function parseCoordinatesFromObject(obj: Coordinate): Coordinate {
  return {
    ...obj,
  }
}

function parseCoordinatesFromNumbers(x: number, y: number): Coordinate {
  return {
    x,
    y,
  }
}

// Equivalent implimentations using function overloading

function parseCoordinate(arg: string): Coordinate
function parseCoordinate(obj: Coordinate): Coordinate
function parseCoordinate(x: number, y: number): Coordinate
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
  let coord: Coordinate = {
    x: 0,
    y: 0,
  }

  if (typeof arg1 === 'object') {
    coord = {
      ...(arg1 as Coordinate),
    }
  } else if (typeof arg1 == 'string') {
    ;(arg1 as string).split(',').forEach((str) => {
      const [key, value] = str.split(':')
      coord[key as 'x' | 'y'] = parseInt(value, 10)
    })
  } else {
    coord = {
      x: arg1 as number,
      y: arg2 as number,
    }
  }
  return coord
}

console.log(parseCoordinate(10, 20))
console.log(parseCoordinate({ x: 10, y: 20 }))
console.log(parseCoordinate('x:10,y:20'))

