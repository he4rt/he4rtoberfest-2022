#!/bin/sh

DAYS_IN_YEAR=$(( 365 ))
DAYS_IN_MONTH=$(( 30 ))

YEARS=$(( $1 / $DAYS_IN_YEAR ))

MONTHS=$(( ($1 % $DAYS_IN_YEAR) / $DAYS_IN_MONTH ))

DAYS=$(( ($1 % $DAYS_IN_YEAR) % $DAYS_IN_MONTH ))

echo  "$YEARS ano(s)"
echo  "$MONTHS mes(es)"
echo  "$DAYS dia(s)"