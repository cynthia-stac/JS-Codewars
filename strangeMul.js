function mul(a, b) {
    return (b === 0)? 0:(a + mul(a, b-1))
}
