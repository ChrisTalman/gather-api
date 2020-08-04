declare module 'gather-api'
{
	export function verifySignature({signature, requestBody, secret}: {signature: string, requestBody: string | object, secret: string}): boolean;
	export function generateRequestBodySignature({requestBody, secret}: {requestBody: string | object, secret: string}): string;
}