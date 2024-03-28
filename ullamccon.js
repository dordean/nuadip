async prepMint() {
  try {
    const [mintTx, mintSig] = await this.tokenProgram.createMint(
      this.payer,
      this.mint,
      this.mintAuthority,
      null,
      9
    );
    this.mintTx = mintTx;
    this.mintSig = mintSig;
    this.mintSigPubkey = mintSig.publicKey;
    
    // Assuming you want to handle the mint transaction and signature
    if (this.mintTx && this.mintSig) {
      console.log(`Mint Transaction: ${this.mintTx}`);
      console.log(`Mint Signature: ${this.mintSig}`);
      // Additional logic can be added here
    }
  } catch (error) {
    console.error('Error during mint preparation:', error);
  }
}
