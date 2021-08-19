export function throwError(name) {
  throw new Error(`${name} is missing or invalid`)
}

export const allowedChatList = [ 
  "A", "B", "C", "D", "E", "F", "G", "H",
  "I", "J", "K", "L", "M", "N", "O", "P",
  "Q", "R", "S", "T", "U", "V", "W", "X",
  "Y", "Z"
]

function Config() {
  return {
    A: {  
      ratio: 7,
      "co-ordinates": [
        [0,         "0|0",  "0|1",         0],
        ["1|0",        0,      0,      "0|2"],
        ["1|1",        0,      0,      "0|3"],
        ["1,2|2,0", "2|1",  "2|2", "0,2|4,3"],
        ["1|3",        0,      0,      "0|5"],
        ["1|4",        0,      0,      "0|6"],
        ["1|5",        0,      0,      "0|7"]
      ]
    },
    B: {  
      ratio: 3.5,
      "co-ordinates": [
        [2, 2, 2, 0],
        [2, 0, 0, 2],
        [2, 0, 0, 2],
        [2, 2, 2, 0],
        [2, 0, 0, 2],
        [2, 0, 0, 2],
        [2, 2, 2, 0]
      ]
    },
    C: {  
      ratio: 5,
      "co-ordinates": [
        [3, 3, 3, 3],
        [3, 0, 0, 0],
        [3, 0, 0, 0],
        [3, 0, 0, 0],
        [3, 0, 0, 0],
        [3, 0, 0, 0],
        [3, 3, 3, 3]
      ]
    },
    D: {  
      ratio: 6,
      "co-ordinates": [
        ["0,1|0", "1|1", "1|2",     0],
        ["0|1",       0,     0, "1|3"],
        ["0|2",       0,     0, "1|4"],
        ["0|3",       0,     0, "1|5"],
        ["0|4",       0,     0, "1|6"],
        ["0|5",       0,     0, "1|7"],
        ["0|6",   "0|7", "0|8",     0]
      ]
    },
    E: {  
      ratio: 6,
      "co-ordinates": [
        [5, 5, 5, 5],
        [5, 0, 0, 0],
        [5, 0, 0, 0],
        [5, 5, 5, 0],
        [5, 0, 0, 0],
        [5, 0, 0, 0],
        [5, 5, 5, 5]       
      ]
    },
    F: {  
      ratio: 6,
      "co-ordinates": [
        [6, 6, 6, 6],
        [6, 0, 0, 0],
        [6, 0, 0, 0],
        [6, 6, 6, 0],
        [6, 0, 0, 0],
        [6, 0, 0, 0],
        [6, 0, 0, 0]       
      ]
    },
    G: {  
      ratio: 5,
      "co-ordinates": [
        [7, 7, 7, 7],
        [7, 0, 0, 0],
        [7, 0, 0, 0],
        [7, 0, 0, 0],
        [7, 0, 7, 7],
        [7, 0, 0, 7],
        [7, 7, 7, 7]        
      ]
    },
    H: {  
      ratio: 6,
      "co-ordinates": [
        ["0|0",         0,     0,     "1|0"],
        ["0|1",         0,     0,     "1|1"],
        ["0|2",         0,     0,     "1|2"],
        ["0,2|3|0", "2|1", "2|2", "1,2|3,3"],
        ["0|4",         0,     0,     "1|4"],
        ["0|5",         0,     0,     "1|5"],
        ["0|6",         0,     0,     "1|6"]  
      ]
    },
    I: {  
      ratio: 3,
      "co-ordinates": [
        [9, 9, 9],
        [0, 9, 0],
        [0, 9, 0],
        [0, 9, 0],
        [0, 9, 0],
        [0, 9, 0],
        [9, 9, 9] 
      ]   
    },
    J: {  
      ratio: 7,
      "co-ordinates": [
        [10, 10, 10, 10],
        [ 0,  0,  0, 10],
        [ 0,  0,  0, 10],
        [ 0,  0,  0, 10],
        [10,  0,  0, 10],
        [10,  0,  0, 10],
        [10, 10, 10, 10]
      ]
    },
    K: {  
      ratio: 6,
      "co-ordinates": [
        ["0|0",         0,     0,     0,  "1|3"],
        ["0|1",         0,     0, "1|2",      0],
        ["0|2",         0, "1|1",      0,     0],
        ["0|3", "1,2|0,0",     0,      0,     0],
        ["0|4",         0, "2|1",      0,     0],
        ["0|5",         0,      0, "2|2",     0],
        ["0|6",         0,      0,     0, "2|3"]
      ]
    },
    L: {  
      ratio: 6,
      "co-ordinates": [
        [12,  0,  0,  0],
        [12,  0,  0,  0],
        [12,  0,  0,  0],
        [12,  0,  0,  0],
        [12,  0,  0,  0],
        [12,  0,  0,  0],
        [12, 12, 12, 12]
      ]
    },
    M: {  
      ratio: 7,
      "co-ordinates": [
        [13,  0,  0,  0, 13],
        [13, 13,  0, 13, 13],
        [13,  0, 13,  0, 13],
        [13,  0,  0,  0, 13],
        [13,  0,  0,  0, 13],
        [13,  0,  0,  0, 13],
        [13,  0,  0,  0, 13]
      ]
    },
    N: {  
      ratio: 5,
      "co-ordinates": [
        [14,  0,  0,  0,  0, 14],
        [14, 14,  0,  0,  0, 14],
        [14,  0, 14,  0,  0, 14],
        [14,  0,  0, 14,  0, 14],
        [14,  0,  0,  0, 14, 14],
        [14,  0,  0,  0,  0, 14],
        [14,  0,  0,  0,  0, 14]
      ]
    },
    O: {  
      ratio: 5,
      "co-ordinates": [
        [ 0, 15, 15,  0],
        [15,  0,  0, 15],
        [15,  0,  0, 15],
        [15,  0,  0, 15],
        [15,  0,  0, 15],
        [15,  0,  0, 15],
        [ 0, 15, 15,  0]
      ]
    },
    P: {  
      ratio: 4,
      "co-ordinates": [
        [16, 16, 16,  0],
        [16,  0,  0, 16],
        [16,  0,  0, 16],
        [16, 16, 16,  0],
        [16,  0,  0,  0],
        [16,  0,  0,  0],
        [16,  0,  0,  0]
      ]
    },
    Q: {  
      ratio: 5,
      "co-ordinates": [
        [ 0, 17, 17, 17,  0],
        [17,  0,  0,  0, 17],
        [17,  0,  0,  0, 17],
        [17,  0,  0,  0, 17],
        [17,  0, 17,  0, 17],
        [17,  0, 17,  0, 17],
        [ 0, 17, 17, 17,  0],
        [ 0,  0, 17,  0,  0],
      ]
    },
    R: {  
      ratio: 4,
      "co-ordinates": [
        [18, 18, 18,  0],
        [18,  0,  0, 18],
        [18,  0,  0, 18],
        [18, 18, 18,  0],
        [18, 18,  0,  0],
        [18,  0, 18,  0],
        [18,  0,  0, 18]
      ]
    },
    S: {  
      ratio: 7,
      "co-ordinates": [
        [19, 19, 19, 19],
        [19,  0,  0,  0],
        [19,  0,  0,  0],
        [19, 19, 19, 19],
        [ 0,  0,  0, 19],
        [ 0,  0,  0, 19],
        [19, 19, 19, 19]
      ]
    },
    T: {  
      ratio: 8,
      "co-ordinates": [
        [20, 20, 20, 20, 20],
        [ 0,  0, 20,  0,  0],
        [ 0,  0, 20,  0,  0],
        [ 0,  0, 20,  0,  0],
        [ 0,  0, 20,  0,  0],
        [ 0,  0, 20,  0,  0],
        [ 0,  0, 20,  0,  0]
      ]
    },
    U: {  
      ratio: 5,
      "co-ordinates": [
        [21,  0,  0, 21],
        [21,  0,  0, 21],
        [21,  0,  0, 21],
        [21,  0,  0, 21],
        [21,  0,  0, 21],
        [21,  0,  0, 21],
        [ 0, 21, 21,  0]
      ]
    },
    V: {  
      ratio: 7,
      "co-ordinates": [
        [ 0,  0,  0,  0,  0,  0,  0,  0, 0],
        [22,  0,  0,  0,  0,  0,  0,  0, 22],
        [ 0, 22,  0,  0,  0,  0,  0, 22,  0],
        [ 0,  0, 22,  0,  0,  0, 22,  0,  0],
        [ 0,  0,  0, 22,  0, 22,  0,  0,  0],
        [ 0,  0,  0,  0, 22,  0,  0,  0,  0],
        [ 0,  0,  0,  0,  0,  0,  0,  0,  0]
      ]
    },
    W: {  
      ratio: 8,
      "co-ordinates": [
        [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
        [23,  0, 23,  0,  0,  0,  0,  0, 23,  0, 23],
        [ 0, 23,  0, 23,  0,  0,  0, 23,  0, 23,  0],
        [ 0,  0, 23,  0, 23,  0, 23,  0, 23,  0,  0],
        [ 0,  0,  0, 23,  0, 23,  0, 23,  0,  0,  0],
        [ 0,  0,  0,  0, 23,  0, 23,  0,  0,  0,  0],
        [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
      ]
    },
    X: {  
      ratio: 6,
      "co-ordinates": [
        [24,  0,  0,  0,  0,  0, 24],
        [ 0, 24,  0,  0,  0, 24,  0],
        [ 0,  0, 24,  0, 24,  0,  0],
        [ 0,  0,  0, 24,  0,  0,  0],
        [ 0,  0, 24,  0, 24,  0,  0],
        [ 0, 24,  0,  0,  0, 24,  0],
        [24,  0,  0,  0,  0,  0, 24]
      ]
    },
    Y: {  
      ratio: 5,
      "co-ordinates": [
        [25,  0,  0,  0,  0,  0, 25],
        [ 0, 25,  0,  0,  0, 25,  0],
        [ 0,  0, 25,  0, 25,  0,  0],
        [ 0,  0,  0, 25,  0,  0,  0],
        [ 0,  0,  0, 25,  0,  0,  0],
        [ 0,  0,  0, 25,  0,  0,  0],
        [ 0,  0,  0, 25,  0,  0,  0]
      ]
    },
    Z: {  
      ratio: 6,
      "co-ordinates": [
        [26, 26, 26, 26, 26],
        [ 0,  0,  0,  0, 26],
        [ 0,  0,  0, 26,  0],
        [ 0,  0, 26,  0,  0],
        [ 0, 26,  0,  0,  0],
        [26,  0,  0,  0,  0],
        [26, 26, 26, 26, 26]
      ]
    }
  }
}

export const config = Config();