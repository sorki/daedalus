@watch
Feature: UTXOs chart data

  Scenario: The histogram data is sent to the `getUtxoChartData` function
    Given the `getUtxoChartData` function receives the following props:
      | walletAmount      | walletUtxosAmount |
      | 10                | 0                 |
      | 100               | 0                 |
      | 1000              | 3                 |
      | 10000             | 0                 |
      | 100000            | 0                 |
      | 1000000           | 0                 |
      | 10000000          | 4                 |
      | 100000000         | 0                 |
      | 1000000000        | 0                 |
      | 10000000000       | 0                 |
      | 100000000000      | 0                 |
      | 1000000000000     | 0                 |
      | 10000000000000    | 2                 |
      | 100000000000000   | 0                 |
      | 1000000000000000  | 0                 |
      | 10000000000000000 | 1                 |
      | 45000000000000000 | 1                 |
    Then the wallet amounts should be sorted sorted ascending
    And the wallet amounts should be formatted from lovelace values into wallet amount
    And there should be no wallet amounts greater than 100K
    And the wallet UTXO amounts for wallet amounts greater than 1000000 should be aggregated

  Scenario Outline: A wallet amount is sent to the `getUtxoWalletPrettyAmount` function
    Given the `getUtxoWalletPrettyAmount` function receives the following <AMOUNT>
    Then the response should be a string
    And amounts less than 1000 should not be modified
    And amounts equal or greater than 1000 should be formatted to human-readable format

    Examples:
      | AMOUNT |
      | 0.0001 |
      | 0.001  |
      | 0.01   |
      | 0.1    |
      | 1      |
      | 10     |
      | 100    |
      | 1000   |
      | 10000  |
      | 100000 |





















