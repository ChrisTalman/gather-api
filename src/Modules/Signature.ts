'use strict';

// External Modules
import { timingSafeEqual, createHmac } from 'crypto';

// Constants
const SIGNATURE_ALGORITHM = 'sha256';

export function verifySignature({signature, requestBody, secret}: {signature: string, requestBody: string | object, secret: string})
{
	const localSignature = generateRequestBodySignature({requestBody, secret});
	const verified = timingSafeEqual(Buffer.from(signature), Buffer.from(localSignature));
	return verified;
};

export function generateRequestBodySignature({requestBody, secret}: {requestBody: string | object, secret: string})
{
	const hmac = createHmac(SIGNATURE_ALGORITHM, secret);
	const bodyString = typeof requestBody === 'string' ? requestBody : JSON.stringify(requestBody);
	hmac.update(bodyString);
	const signature = hmac.digest('hex');
	return signature;
};