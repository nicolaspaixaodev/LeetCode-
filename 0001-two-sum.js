/**
 * 1. Two Sum  ·  Fácil
 * https://leetcode.com/problems/two-sum/
 *
 * PROBLEMA
 * Dado um array de números e um alvo, devolver os ÍNDICES dos dois
 * elementos que somam o alvo. Cada entrada tem exatamente uma
 * solução, e não se pode usar o mesmo elemento duas vezes.
 *
 * IDEIA
 * A força bruta testa todos os pares — dois laços aninhados, O(n²).
 * A virada é trocar BUSCA por CONSULTA: em vez de perguntar
 * "quem combina com esse número?", pergunto "eu já vi o número que
 * falta pra completar esse?".
 *
 * Um objeto guarda cada número já visto e sua posição. Aí a resposta
 * sai numa consulta direta, e uma passada resolve.
 *
 * DETALHE QUE IMPORTA
 * A consulta vem ANTES de anotar. Se fosse o contrário, em [3, 3]
 * o primeiro 3 se acharia a si mesmo e devolveria [0, 0].
 *
 * Tempo:  O(n)
 * Espaço: O(n)
 */

var twoSum = function (nums, target) {
    const vistos = {};

    for (let i = 0; i < nums.length; i++) {
        const falta = target - nums[i];

        if (vistos[falta] !== undefined) {
            return [vistos[falta], i];
        }

        vistos[nums[i]] = i;
    }
};
