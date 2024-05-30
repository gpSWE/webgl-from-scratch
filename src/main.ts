

const {
	innerWidth: width,
	innerHeight: height,
	devicePixelRatio: dpr,
} = window

// Canvas
const canvas = document.getElementById( "webgl" )
canvas.width = width * dpr
canvas.height = height * dpr

// Rendering context
const gl = canvas.getContext( "webgl2" ) // OpenGL embedded systems

gl.clearColor( 0, 0, 0, 1 )
gl.clear( gl.COLOR_BUFFER_BIT )

// Program
const program = gl.createProgram()

// Vertex GLSL
const vertexCode = `#version 300 es

void main() {

	gl_PointSize = 50.0;
	gl_Position = vec4( 0.0, 0.0, 0.0, 1.0 ); // clip-space coordinates
}
`

// Fragment GLSL
const fragmentCode = `#version 300 es

precision mediump float; // lowp, mediump, highp

out vec4 outColor;

void main() {

	outColor = vec4( 1.0, 0.0, 1.0, 1.0 ); // R, G, B, A
}
`

// Vertex shader
const vertexShader = gl.createShader( gl.VERTEX_SHADER )
gl.shaderSource( vertexShader, vertexCode )
gl.compileShader( vertexShader )
gl.attachShader( program, vertexShader )

// Fragment shader
const fragmentShader = gl.createShader( gl.FRAGMENT_SHADER )
gl.shaderSource( fragmentShader, fragmentCode )
gl.compileShader( fragmentShader )
gl.attachShader( program, fragmentShader )

gl.linkProgram( program )
gl.useProgram( program )

// Draw

gl.drawArrays( gl.POINTS, 0, 1 )

// https://t.me/WebGPUDev
