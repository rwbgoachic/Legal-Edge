import axios from 'axios';

export async function syncIOLTAAccount(accountId: string) {
  try {
    // Implementation will be added when MerchantPortal API details are available
    return { success: true };
  } catch (error) {
    console.error('IOLTA sync failed:', error);
    throw error;
  }
}