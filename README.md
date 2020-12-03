# Snowflake Github Action

This generates a Twitter Snowflake, for use in other actions.

## Inputs

### `datacenter`

datacenter identifier. It can have values from 0 to 31.

### `worker`

worker identifier. It can have values from 0 to 31.

### `id`

generator identifier. It can have values from 0 to 1023.

### `epoch`

Epoch to use in generation of the snowflake

## Outputs

### `id`

The twitter snowflake, in decimal form.
## Example usage

uses: gubareve/snowflake-github-action
with:
  worker: 3