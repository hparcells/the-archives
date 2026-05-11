#!/bin/bash
infisical run --env=prod --token=$INFISICAL_TOKEN -- docker compose pull
infisical run --env=prod --token=$INFISICAL_TOKEN -- docker compose up -d
