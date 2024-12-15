    function checkAllCartelas() {
              cartelas.forEach((cartela, index) => {
                      const cartelaContainer = document.querySelectorAll('.cartela-container')[index];
                              const statusEl = cartelaContainer.querySelector('.status') || document.createElement('div');
                                      statusEl.className = 'status';
                                              
                                                      if (checkCartela(cartela.numeros)) {
                                                                statusEl.textContent = `Cartela ${cartela.serie}: Você ganhou!`;
                                                                          statusEl.style.color = 'green';
                                                                                  } else {
                                                                                            statusEl.textContent = `Cartela ${cartela.serie}: Ainda jogando...`;
                                                                                                      statusEl.style.color = 'black';
                                                                                                              }
                                                                                                                      if (!cartelaContainer.contains(statusEl)) {
                                                                                                                                cartelaContainer.appendChild(statusEl);
                                                                                                                                        }
                                                                                                                                              });
                                                                                                                                                  }

                                                                                                                                                      // Verifica se uma cartela ganhou
                                                                                                                                                          function checkCartela(numeros) {
                                                                                                                                                                // Checa linhas
                                                                                                                                                                      for (let row of numeros) {
                                                                                                                                                                              if (row.every(num => calledNumbers.has(num))) return true;
                                                                                                                                                                                    }

                                                                                                                                                                                          // Checa colunas
                                                                                                                                                                                                for (let col = 0; col < 5; col++) {
                                                                                                                                                                                                        if (numeros.every(row => calledNumbers.has(row[col]))) return true;
                                                                                                                                                                                                              }

                                                                                                                                                                                                                    // Checa diagonais
                                                                                                                                                                                                                          const diag1 = [0, 1, 2, 3, 4].every(i => calledNumbers.has(numeros[i][i]));
                                                                                                                                                                                                                                const diag2 = [0, 1, 2, 3, 4].every(i => calledNumbers.has(numeros[i][4 - i]));

                                                                                                                                                                                                                                      return diag1 || diag2;
                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                          
    }