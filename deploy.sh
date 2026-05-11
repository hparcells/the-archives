#!/bin/bash
infisical run --env=production --token=$INFISICAL_TOKEN -- docker compose pull
infisical run --env=production --token=$INFISICAL_TOKEN -- docker compose up -d
