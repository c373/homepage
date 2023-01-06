tr -d '\r' < $1 > out
echo $1
mv out ${1%%.out}
