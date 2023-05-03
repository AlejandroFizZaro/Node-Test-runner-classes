import { Rectangle } from "./class.js";
import { describe, it, mock, test } from "node:test";
import assert from "node:assert";

test('my class multiply width and height', (t) => {
  const myRectangle = new Rectangle(2, 3)

  assert.strictEqual( myRectangle.calcArea(), 6 ); // => 2 * 3 === 6
});
test('my class return Area', (t) => {
  const myRectangle = new Rectangle(5, 5)

  assert.strictEqual(myRectangle.area, 25); // => 2 * 3 === 6
});
test( 'trying mocks with classes', (t)=> {

  // Mocking the class.
  const mockTangle = mock.fn ((a, b) => {
    const myRectangle =  new Rectangle ( a, b );
    const result = myRectangle.area;
    return result;
  })

  assert.strictEqual (mockTangle.mock.calls.length, 0); //  ZERO calls
  
  // FIRST CALL
  assert.strictEqual( mockTangle(10,10), 100 );
  // CHECKING HOW MUCH CALLS WERE DONE ( 1 )
  assert.strictEqual( mockTangle.mock.calls.length, 1);
  
  // SECOND CALL
  assert.strictEqual(mockTangle(20, 20), 400);
  // CHECKING HOW MUCH CALLS WERE DONE ( 2 )
  assert.strictEqual(mockTangle.mock.calls.length, 2);

  // MOCK CALLS CONTENT IS STORED IN AN ARRAY
  // CHECKING THE CALLS CONTENT
  const call_1 = mockTangle.mock.calls[0];
  assert.deepStrictEqual(call_1.arguments, [10, 10]);
  assert.strictEqual (call_1.result, 100);

  const call_2 = mockTangle.mock.calls[1];
  assert.deepStrictEqual(call_2.arguments, [20, 20]);
  assert.strictEqual(call_2.result, 400)

  // Reset the global mocks
  mock.reset();
})