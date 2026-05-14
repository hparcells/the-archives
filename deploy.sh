#!/bin/bash
infisical run --env=prod --token=$INFISICAL_TOKEN --projectId=8204894b-8fa8-464f-a4d2-dc6f9621d7c8 --domain=https://secrets.hunterparcells.com -- docker compose pull
infisical run --env=prod --token=$INFISICAL_TOKEN --projectId=8204894b-8fa8-464f-a4d2-dc6f9621d7c8 --domain=https://secrets.hunterparcells.com -- docker compose up -d
