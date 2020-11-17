#!/usr/bin/env node
const PRIVATE_KEY = 'PLUG IN YOUR KEY HERE' // DO NOT SHARE!

const crypto = require('crypto')
const mode = (process.argv[2] || '')
const input = (process.argv[3] || '')
let output = 'Usage: lampcrypt.js <encrypt | decrypt> <string to encrypt or decrypt>'

try {
	if (mode === 'encrypt') {
		let ivl = crypto.randomBytes(16)
		let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(PRIVATE_KEY, 'hex'), ivl)
		output = Buffer.concat([
			ivl,
			cipher.update(Buffer.from(input, 'utf16le')), 
			cipher.final()
		]).toString('base64')
	} else if (mode === 'decrypt') {
		let dat = Buffer.from(input, 'base64')
		let cipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(PRIVATE_KEY, 'hex'), dat.slice(0, 16))
		output = Buffer.concat([
			cipher.update(dat.slice(16)),
			cipher.final()
		]).toString('utf16le')
	}
	console.dir(output)
} catch(e) { 
	console.log('*** ERROR: Could not ' + mode + ' the string. ***')
	process.exit(1) 
}
